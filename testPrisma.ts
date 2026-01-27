import { prisma } from '@/lib/prisma';

async function main() {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  const entries = await prisma.entry.findMany();

  console.log('Users:', users);
  console.log('Entries:', entries);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
