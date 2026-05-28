// Watch Tower · seed inicial: insere Hammis na allowlist como admin.
// Roda com: npx prisma db seed (script configurado em package.json)
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Os 4 sócios da WiseHub US LLC + as 2 contas admin operacionais.
// Cap table: Lucas Bin 30% + Marcela 30% + Jessé 20% + Hammis 20%.
// Todos role=admin com acesso master ao Watch Tower.
// IMPORTANTE: emails SEMPRE lowercase — o EmailProvider do NextAuth
// normaliza o identifier pra minúsculo, e o match na allowlist é exato.
const ADMIN_EMAILS: Array<{ email: string; notes?: string }> = [
  { email: "hzfarah.wisehub@gmail.com",          notes: "Hammis Farah · sócio 20% · MGR" },
  { email: "lucasbin181@gmail.com",              notes: "Lucas Bin · sócio 30%" },
  { email: "marcelanogueiracidadania@gmail.com", notes: "Marcela · sócia 30%" },
  { email: "diver.wisehub@gmail.com",            notes: "Jessé Rodrigues · sócio 20%" },
  { email: "adm.wisehub@gmail.com",              notes: "Admin operacional WiseHub" },
  { email: "adm@wisehubnow.com",                 notes: "Admin operacional wisehubnow.com" },
];

async function main() {
  for (const entry of ADMIN_EMAILS) {
    await prisma.allowedEmail.upsert({
      where: { email: entry.email },
      create: {
        email: entry.email,
        role: "admin",
        addedBy: "seed",
        notes: entry.notes ?? "Seed inicial · admin master",
      },
      update: {
        role: "admin",
        notes: entry.notes ?? undefined,
      },
    });
    console.log(`✓ allowlist: ${entry.email} (admin) · ${entry.notes ?? ""}`);
  }
  console.log(`\nDone · ${ADMIN_EMAILS.length} admins seeded.`);
  console.log(`\nTodos os 4 sócios + 2 contas operacionais na allowlist.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
