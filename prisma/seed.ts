import { prisma } from '../lib/prisma.ts';

async function main() {
  await prisma.user.upsert({
    where: { email: 'jeremy@example.com' },
    update: {},
    create: {
      name: 'Jeremy Carlos',
      email: 'jeremy@example.com',
      posts: {
        create: [
          { title: 'Hello World', content: 'My first post', published: true },
        ],
      },
    },
  });

  await prisma.entry.createMany({
    data: [
      { title: 'My first entry', tag: 'personal' },
      { title: 'Learning Prisma', tag: 'coding' },
    ],
  });

  console.log('Seed finished!');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
