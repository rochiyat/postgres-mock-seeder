import { PrismaClient } from '@prisma/client';
import casual from 'casual';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Seeding database...');

  // Generate Users
  const users = await prisma.user.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: casual.full_name,
      email: casual.email,
      age: casual.integer(18, 60),
    })),
  });

  // Ambil semua user yang sudah dibuat
  const allUsers = await prisma.user.findMany();

  // Generate Posts
  await prisma.post.createMany({
    data: Array.from({ length: 10 }).map(() => ({
      title: casual.title,
      content: casual.text,
      userId: allUsers[Math.floor(Math.random() * allUsers.length)].id,
    })),
  });

  console.log('✅ Seeding completed!');
}

seed().catch(console.error).finally(() => prisma.$disconnect());
