import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Seeding database...');

  await prisma.aircraft.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.vehicle.vehicle(),
      type: faker.vehicle.type(),
    })),
  });

  await prisma.aircraftType.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      type: faker.vehicle.type(),
    })),
  });

  await prisma.airline.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.company.name(),
    })),
  });

  await prisma.animal.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.animal.bear(),
    })),
  });

  await prisma.bitcoinAddress.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      address: faker.finance.bitcoinAddress(),
      family: faker.finance.currencyCode(),
    })),
  });

  await prisma.bitcoinNetwork.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.finance.currencyName(),
    })),
  });

  await prisma.book.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      title: faker.book.title(),
      author: faker.person.fullName(),
    })),
  });

  await prisma.chemicalElement.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.science.chemicalElement().name,
      symbol: faker.science.chemicalElement().symbol,
    })),
  });

  await prisma.color.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.color.human(),
      format: faker.color.space(),
    })),
  });

  await prisma.commerce.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      product: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
    })),
  });

  await prisma.company.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.company.name(),
    })),
  });

  await prisma.currency.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.finance.currencyName(),
      code: faker.finance.currencyCode(),
    })),
  });

  await prisma.finance.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      account: faker.finance.accountNumber(),
      amount: parseFloat(faker.finance.amount()),
    })),
  });

  await prisma.food.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.food.dish(),
    })),
  });

  await prisma.internet.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      email: faker.internet.email(),
      domain: faker.internet.domainName(),
    })),
  });

  await prisma.location.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      country: faker.location.country(),
      city: faker.location.city(),
    })),
  });

  await prisma.music.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      genre: faker.music.genre(),
      artist: faker.person.fullName(),
    })),
  });

  await prisma.person.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      name: faker.person.fullName(),
      gender: faker.person.sex(),
    })),
  });

  await prisma.phoneNumber.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      number: faker.phone.number(),
    })),
  });

  await prisma.science.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      field: faker.science.chemicalElement().name,
    })),
  });

  await prisma.system.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      os: faker.system.networkInterface(),
    })),
  });

  await prisma.vehicle.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      model: faker.vehicle.model(),
      type: faker.vehicle.type(),
    })),
  });

  await prisma.word.createMany({
    data: Array.from({ length: 5 }).map(() => ({
      word: faker.word.adjective(),
    })),
  });

  console.log('✅ Seeding completed!');
}

seed()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
