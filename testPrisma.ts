import prisma from './lib/prismaClient.ts'

async function main() {
  const users = await prisma.user.findMany({ include: { posts: true } })
  console.log('Users in DB:', users)
}

main()
  .then(() => console.log('Test complete'))
  .catch(console.error)
  .finally(() => prisma.$disconnect())
