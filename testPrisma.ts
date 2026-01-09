import prisma from './lib/prismaClient.ts';

async function main() {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  const entries = await prisma.entry.findMany();

  console.log("Users:", users);
  console.log("Entries:", entries);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
