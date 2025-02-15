# Postgres Faker Seeder

Insert Data from faker & static mock data to DB PostgreSQL

## Install

```bash
npm install
```

## Configuration

Before running the seeder, make sure you have a `.env` file with the following variables:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
```

Alternatively, you can modify the `config.js` file to set up your database connection.

## Run

To seed the database with fake data, run:

```bash
npm run faker-seed
npm run seed
```

This will generate and insert random data into the specified PostgreSQL database.

## View Tables

![View Tables](./assets/view-table.jpg)

## Customization

If you need to customize the number of records or data structure, you can edit the `seeder.js` file where Faker.js is used to generate mock data.

## Requirements

- Node.js (>=18.x recommended)
- PostgreSQL installed and running
- A valid database connection configured in `.env`

## Troubleshooting

- If the seeder fails to connect to the database, check your `.env` file and ensure PostgreSQL is running.
- Use `console.log` inside `faker-seed.js`, `employee-mock.js`, `projects-mock.js` to debug the generated data before inserting it.

## License

This project is open-source and available under the MIT License.