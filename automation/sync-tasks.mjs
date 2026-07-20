#!/usr/bin/env node
/**
 * sync-tasks.mjs - sincroniza as rotinas agendadas de PROJETO entre o repo e a maquina.
 *
 *   node automation/sync-tasks.mjs check
 *   node automation/sync-tasks.mjs export  [--yes]
 *   node automation/sync-tasks.mjs install [--yes] [--dest <diretorio>]
 *
 * check   - compara repo x maquina byte a byte e lista as diferencas. exit 1 se houver drift.
 * export  - maquina -> repo   (captura edicao feita na mao no .claude/scheduled-tasks)
 * install - repo   -> maquina (deixa um PC novo operacional a partir do git)
 *
 * SEM --yes nenhum dos dois modos escreve nada: imprime o plano do que SERIA sobrescrito
 * e sai. Com --yes, escreve so o que realmente difere (idempotente: rodar de novo nao muda nada).
 *
 * ISOLAMENTO (regra permanente): este script NUNCA varre diretorio. Ele so toca os taskId
 * listados em automation/tasks.json, que e uma allowlist de rotinas de PROJETO. As rotinas
 * de assunto pessoal do Hammis nao estao na allowlist, nao entram neste repo, e o guarda
 * DENY abaixo aborta se alguma tentar entrar. O DENY e uma lista de termos-filtro; ela
 * existe para barrar, nao para descrever o que foi barrado.
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_TASKS = path.join(HERE, 'scheduled-tasks');
const MANIFEST = path.join(HERE, 'tasks.json');
const DEFAULT_LIVE = path.join(
  process.env.USERPROFILE || os.homedir(),
  '.claude',
  'scheduled-tasks'
);

/** Rotinas de assunto pessoal: nunca neste repo, em nenhuma hipotese. */
const DENY = /remedio|rem[eé]dios|pai\b|pessoal|wrap.?labs|trust|medicament/i;

// ---------- helpers ----------

const c = {
  reset: '\x1b[0m', red: '\x1b[31m', green: '\x1b[32m',
  yellow: '\x1b[33m', cyan: '\x1b[36m', dim: '\x1b[2m', bold: '\x1b[1m',
};
const paint = (color, s) => (process.stdout.isTTY ? color + s + c.reset : s);

function die(msg) {
  console.error(paint(c.red, 'ERRO: ') + msg);
  process.exit(2);
}

function readManifest() {
  if (!fs.existsSync(MANIFEST)) die(`manifesto nao encontrado: ${MANIFEST}`);
  let m;
  try {
    m = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  } catch (e) {
    die(`manifesto invalido (${MANIFEST}): ${e.message}`);
  }
  if (!Array.isArray(m.tasks) || m.tasks.length === 0) {
    die('manifesto sem lista "tasks".');
  }
  for (const t of m.tasks) {
    if (!t.taskId || typeof t.taskId !== 'string') {
      die('ha entrada no manifesto sem "taskId".');
    }
    if (DENY.test(t.taskId)) {
      die(
        `taskId "${t.taskId}" bate com a lista de assuntos PESSOAIS.\n` +
        '       Rotina pessoal nao entra neste repositorio (ver automation/README.md).\n' +
        '       Remova a entrada do tasks.json antes de rodar de novo.'
      );
    }
    if (t.taskId.includes('/') || t.taskId.includes('\\') || t.taskId.includes('..')) {
      die(`taskId "${t.taskId}" tem separador de caminho; use so o nome da pasta.`);
    }
  }
  return m;
}

/** null quando o arquivo nao existe. */
function readBytes(p) {
  try {
    return fs.readFileSync(p);
  } catch {
    return null;
  }
}

const same = (a, b) => a !== null && b !== null && Buffer.compare(a, b) === 0;

function statusOf(srcBuf, dstBuf) {
  if (srcBuf === null) return 'FALTA_ORIGEM';
  if (dstBuf === null) return 'NOVO';
  if (same(srcBuf, dstBuf)) return 'IGUAL';
  return 'SOBRESCREVE';
}

function humanBytes(buf) {
  return buf === null ? '-' : `${buf.length}b`;
}

// ---------- planejamento ----------

/**
 * Monta o plano de copia. direction: 'export' (maquina->repo) ou 'install' (repo->maquina).
 */
function buildPlan(manifest, liveDir, direction) {
  return manifest.tasks.map((t) => {
    const repoFile = path.join(REPO_TASKS, t.taskId, 'SKILL.md');
    const liveFile = path.join(liveDir, t.taskId, 'SKILL.md');
    const src = direction === 'export' ? liveFile : repoFile;
    const dst = direction === 'export' ? repoFile : liveFile;
    const srcBuf = readBytes(src);
    const dstBuf = readBytes(dst);
    return {
      taskId: t.taskId,
      cronExpression: t.cronExpression,
      projeto: t.projeto,
      src, dst, srcBuf, dstBuf,
      status: statusOf(srcBuf, dstBuf),
    };
  });
}

function printPlan(plan, direction, willWrite) {
  const arrow = direction === 'export' ? 'maquina -> repo' : 'repo -> maquina';
  console.log(paint(c.bold, `\nPlano (${arrow}):\n`));
  for (const it of plan) {
    const tag = {
      IGUAL: paint(c.dim, '  igual       '),
      NOVO: paint(c.green, '  novo        '),
      SOBRESCREVE: paint(c.yellow, '  SOBRESCREVE '),
      FALTA_ORIGEM: paint(c.red, '  sem origem  '),
    }[it.status];
    const detail =
      it.status === 'SOBRESCREVE'
        ? paint(c.dim, ` (${humanBytes(it.dstBuf)} -> ${humanBytes(it.srcBuf)})`)
        : it.status === 'NOVO'
        ? paint(c.dim, ` (${humanBytes(it.srcBuf)})`)
        : '';
    console.log(`${tag} ${it.taskId}${detail}`);
    if (it.status === 'SOBRESCREVE') {
      console.log(paint(c.dim, `                destino: ${it.dst}`));
    }
    if (it.status === 'FALTA_ORIGEM') {
      console.log(paint(c.dim, `                nao existe: ${it.src}`));
    }
  }

  const n = (s) => plan.filter((p) => p.status === s).length;
  console.log(
    `\nResumo: ${n('IGUAL')} igual · ${n('NOVO')} novo · ` +
    `${paint(c.yellow, n('SOBRESCREVE') + ' a sobrescrever')} · ${n('FALTA_ORIGEM')} sem origem`
  );

  if (!willWrite) {
    const changes = n('NOVO') + n('SOBRESCREVE');
    if (changes === 0) {
      console.log(paint(c.green, '\nNada a fazer. Ja esta em sincronia.\n'));
    } else {
      console.log(
        paint(c.cyan, `\nDRY-RUN: nada foi escrito. Rode de novo com --yes para aplicar.\n`)
      );
    }
  }
}

function applyPlan(plan) {
  let written = 0;
  for (const it of plan) {
    if (it.status !== 'NOVO' && it.status !== 'SOBRESCREVE') continue;
    fs.mkdirSync(path.dirname(it.dst), { recursive: true });
    fs.writeFileSync(it.dst, it.srcBuf); // bytes crus: sem reencodar, sem normalizar quebra de linha
    console.log(paint(c.green, '  escrito     ') + `${it.taskId}  -> ${it.dst}`);
    written++;
  }
  console.log(
    written === 0
      ? paint(c.green, '\nNada a escrever (idempotente).\n')
      : paint(c.green, `\n${written} arquivo(s) escrito(s).\n`)
  );
  return written;
}

// ---------- modos ----------

function modeCheck(manifest, liveDir) {
  const plan = buildPlan(manifest, liveDir, 'export');
  console.log(paint(c.bold, '\nDrift repo x maquina (byte a byte):\n'));
  let drift = 0;
  for (const it of plan) {
    const repoBuf = it.dstBuf;
    const liveBuf = it.srcBuf;
    let line;
    if (repoBuf === null && liveBuf === null) {
      line = paint(c.red, '  ausente nos 2 ') + it.taskId;
      drift++;
    } else if (repoBuf === null) {
      line = paint(c.yellow, '  so na maquina ') + `${it.taskId}  (falta export)`;
      drift++;
    } else if (liveBuf === null) {
      line = paint(c.yellow, '  so no repo    ') + `${it.taskId}  (falta install)`;
      drift++;
    } else if (same(repoBuf, liveBuf)) {
      line = paint(c.dim, '  em sincronia  ') + it.taskId;
    } else {
      line =
        paint(c.red, '  DIVERGENTE    ') +
        `${it.taskId}  (repo ${humanBytes(repoBuf)} x maquina ${humanBytes(liveBuf)})`;
      drift++;
    }
    console.log(line);
  }
  if (drift === 0) {
    console.log(paint(c.green, '\nOK: repo e maquina batem byte a byte.\n'));
    process.exit(0);
  }
  console.log(
    paint(c.red, `\n${drift} divergencia(s).`) +
    ' Rode "export" se a maquina esta certa, "install" se o repo esta certo.\n'
  );
  process.exit(1);
}

function modeCopy(manifest, liveDir, direction, yes) {
  const plan = buildPlan(manifest, liveDir, direction);

  const semOrigem = plan.filter((p) => p.status === 'FALTA_ORIGEM');
  if (semOrigem.length && direction === 'install') {
    console.error(
      paint(c.red, '\nERRO: ') +
      'faltam arquivos no repo para: ' + semOrigem.map((p) => p.taskId).join(', ') + '\n'
    );
    process.exit(2);
  }

  printPlan(plan, direction, yes);
  if (!yes) process.exit(0);

  console.log(paint(c.bold, '\nAplicando:\n'));
  applyPlan(plan);

  if (direction === 'install') {
    console.log(paint(c.bold, 'Falta registrar o agendamento (o cron NAO vem no git):\n'));
    for (const t of manifest.tasks) {
      console.log(`  ${t.taskId.padEnd(46)} ${String(t.cronExpression).padEnd(12)} ${t.schedule || ''}`);
    }
    console.log(
      paint(c.dim,
        '\n  Peca a Friday: "roda o install e recria as tarefas pelo tasks.json".\n' +
        '  Ela cria uma a uma via mcp__scheduled-tasks__create_scheduled_task.\n')
    );
  }
}

// ---------- main ----------

const argv = process.argv.slice(2);
const mode = argv[0];
const yes = argv.includes('--yes');
const destIdx = argv.indexOf('--dest');
const liveDir =
  destIdx !== -1 && argv[destIdx + 1] ? path.resolve(argv[destIdx + 1]) : DEFAULT_LIVE;

if (!['check', 'export', 'install'].includes(mode)) {
  console.log(`
sync-tasks.mjs - rotinas agendadas de PROJETO (allowlist em tasks.json)

  node automation/sync-tasks.mjs check
  node automation/sync-tasks.mjs export  [--yes]
  node automation/sync-tasks.mjs install [--yes] [--dest <dir>]

Sem --yes, imprime o plano e nao escreve nada.
--dest troca o diretorio de scheduled-tasks (util pra testar sem tocar nas rotinas reais).
Diretorio da maquina, por padrao: ${DEFAULT_LIVE}
`);
  process.exit(mode === undefined ? 0 : 2);
}

const manifest = readManifest();

if (destIdx !== -1) {
  console.log(paint(c.cyan, `Diretorio da maquina (--dest): ${liveDir}`));
}

if (mode === 'check') modeCheck(manifest, liveDir);
else modeCopy(manifest, liveDir, mode, yes);
