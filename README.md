# Postgres Faker Seeder

Insert Data from faker & static mock data to DB PostgreSQL

## Choose Library for Seeding Folder

- [Faker.js](./faker-seeder)
- [Casual](./casual-seeder)
- [Chance](./chance-seeder)
- [Test Data Bot](./test-data-bot-seeder)

## Install

```bash
npm install
```

## Configuration

Run migration first

```bash
npx prisma init
```

Create `.env` file

```bash
cp .env.example .env
```

Fill the `.env` file with the following variables:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
```

## Run

To seed the database with fake data, run:

```bash
npx prisma migrate dev --name init
npm run seed
```

This will generate and insert random data into the specified PostgreSQL database.

## Customization

If you need to customize the number of records or data structure, you can edit the `seeder.js` file where several library is used to generate mock data.

## Requirements

- Node.js (>=18.x recommended)
- PostgreSQL installed and running
- A valid database connection configured in `.env`

## Troubleshooting

- If the seeder fails to connect to the database, check your `.env` file and ensure PostgreSQL is running.
- Use `console.log` inside `faker-seed.js`, `employee-mock.js`, `projects-mock.js` to debug the generated data before inserting it.

## License

This project is open-source and available under the MIT License.