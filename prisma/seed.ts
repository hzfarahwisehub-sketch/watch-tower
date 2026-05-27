// Watch Tower · seed inicial: insere Hammis na allowlist como admin.
// Roda com: npx prisma db seed (script configurado em package.json)
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ADMIN_EMAILS = [
  // Hammis (admin master)
  "hzfarah.wisehub@gmail.com",
  // Contas Wisehub admin
  "adm.wisehub@gmail.com",
  "adm@wisehubnow.com",
];

async function main() {
  for (const email of ADMIN_EMAILS) {
    await prisma.allowedEmail.upsert({
      where: { email },
      create: {
        email,
        role: "admin",
        addedBy: "seed",
        notes: "Seed inicial · admin master",
      },
      update: { role: "admin" },
    });
    console.log(`✓ allowlist: ${email} (admin)`);
  }
  console.log(`\nDone · ${ADMIN_EMAILS.length} admins seeded.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
