import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const news = await prisma.news.findMany({
        orderBy: {
          date: 'desc',
        },
      });
      res.status(200).json(news);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Метод ${req.method} не разрешен`);
    }
  } catch (error) {
    console.error('Ошибка при получении новостей:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
}
