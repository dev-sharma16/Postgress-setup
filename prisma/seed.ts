import { prisma } from "../lib/prisma"

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "test1", email: "test1@email.com", age: 18, isMarried: false, nationality: "india"},
      { name: "test2", email: "test2@email.com", age: 19, isMarried: false, nationality: "pakistan"},
      { name: "test3", email: "test3@email.com", age: 20, isMarried: true, nationality: "china"},
      { name: "test4", email: "test4@email.com", age: 21, isMarried: false, nationality: "usa"},
      { name: "test5", email: "test5@email.com", age: 22, isMarried: true, nationality: "russia"},
    ]
  })
}

seed().then(
  ()=>prisma.$disconnect()
)
