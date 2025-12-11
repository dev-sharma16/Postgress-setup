import express from 'express';
import 'dotenv/config';
import { prisma } from "./lib/prisma"

const app = express();
app.use(express.json());

app.get('/users', async (_, res) => {
  // const users = await prisma.user.findMany(); // fetching all the user
  // const users = await prisma.user.findUnique({ // fetching on basis of unique field
  //   where: { email = user.email }
  // })
  // const users = await prisma.user.findMany({
  //   // where: { isMarried: false, age: { gte: 20 } } // both conditon should be true
  //   where: { 
  //     OR: [{ isMarried: false }, { age: { gte: 20 }}] // any of them can be true
  //   }
  // })
  // const users = await prisma.user.findMany({
  //   where: { 
  //     nationality: { not: "pakistan" } // fetching all the user which are not from pakistan
  //   } 
  // })
  const users = await prisma.user.findMany({
    where: { 
      nationality: { in : ["india", "russia"] } // fetching all the user which are from india and russia
    } 
  })
  return res.status(200).json({users : users} )
});

app.put("/users", async (_, res) => {
  const updatedUser = await prisma.user.update({
    where: { email: "test2@email.com" },
    data: { age: 16, isMarried: true }
  })
  
  return res.status(201).json({
    messsage: "user is updated",
    user : updatedUser
  })
})

app.delete("/users", async (_, res) => {
  const deletedUser = await prisma.user.delete({
    where: { email: "test2@email.com" }
  })
  
  return res.status(200).json({
    messsage: "user is deleted",
    user : deletedUser,
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
