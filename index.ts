import express from 'express';
import 'dotenv/config';
import { prisma } from "./lib/prisma"

const app = express();
app.use(express.json());

app.get('/users', async (_, res) => {
  const users = await prisma.user.findMany();
  return res.status(200).json({users : users} )
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
