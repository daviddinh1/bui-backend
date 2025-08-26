require("dotenv").config();
const { PrismaClient } = require("../generated/prisma/index.js");

const prisma = new PrismaClient();

async function main() {
  const profile = await prisma.profile.findMany({
    where: { email: "admin@gmail.com" },
  });

  if (profile) {
    console.log(`User profile is ${profile[0].id}`);
  } else {
    console.error("profile does not exist");
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
