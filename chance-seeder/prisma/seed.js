import { PrismaClient } from '@prisma/client';
import Chance from 'chance';

const prisma = new PrismaClient();
const chance = new Chance();

async function seed() {
  try {
    console.log('🌱 Seeding database...');

    // Insert Users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push(
        prisma.user.create({
          data: {
            name: chance.name(),
            email: chance.email(),
            age: chance.age(),
          },
        })
      );
    }

    await Promise.all(users);
    console.log('✅ Users inserted');

    // Ambil semua user dari DB untuk referensi Post
    const allUsers = await prisma.user.findMany();

    // Insert Posts
    const posts = [];
    for (let i = 0; i < 20; i++) {
      const randomUser = chance.pickone(allUsers);
      posts.push(
        prisma.post.create({
          data: {
            title: chance.sentence({ words: 5 }),
            content: chance.paragraph(),
            userId: randomUser.id,
          },
        })
      );
    }

    await Promise.all(posts);
    console.log('✅ Posts inserted');

    console.log('🎉 Seeding completed!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Jalankan seeding
seed();
