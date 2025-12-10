import { prisma } from "../lib/prisma"

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "test1", email: "test1@email.com" },
      { name: "test2", email: "test2@email.com" },
      { name: "test3", email: "test3@email.com" },
      { name: "test4", email: "test4@email.com" },
      { name: "test5", email: "test5@email.com" },
    ]
  })
}

seed().then(
  ()=>prisma.$disconnect()
)
