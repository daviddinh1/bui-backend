require("dotenv").config();
const { PrismaClient } = require("../generated/prisma/index.js");

const prisma = new PrismaClient();

async function main() {
  const testInsert = await prisma.test.create({
    data: {
      testComment: "third insert!!!!",
    },
  });

  console.log("insert worked check terminal n supabase", testInsert);

  const allRows = await prisma.test.findMany();
  console.log("here is the results of the query", allRows);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
