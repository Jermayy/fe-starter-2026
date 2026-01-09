import prisma from '../lib/prismaClient.ts'

async function main() {
  await prisma.user.create({
    data: {
      name: 'Jeremy Carlos',
      email: 'jeremy@example.com',
      posts: {
        create: [
          { title: 'Hello World', content: 'My first post', published: true }
        ],
      },
    },
  })

  console.log('Seed finished!')
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())
