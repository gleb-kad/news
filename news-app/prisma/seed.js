const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const news = [
    { title: 'News 1', description: 'Description for News 1', createdAt: new Date() },
    { title: 'News 2', description: 'Description for News 2', createdAt: new Date() },
    { title: 'News 3', description: 'Description for News 3', createdAt: new Date() },
    { title: 'News 4', description: 'Description for News 4', createdAt: new Date() },
    { title: 'News 5', description: 'Description for News 5', createdAt: new Date() },
    { title: 'News 6', description: 'Description for News 6', createdAt: new Date() },
    { title: 'News 7', description: 'Description for News 7', createdAt: new Date() },
    { title: 'News 8', description: 'Description for News 8', createdAt: new Date() },
    { title: 'News 9', description: 'Description for News 9', createdAt: new Date() },
    { title: 'News 10', description: 'Description for News 10', createdAt: new Date() },
  ];

  for (const item of news) {
    await prisma.news.create({ data: item });
  }

  console.log('10 news records inserted successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
