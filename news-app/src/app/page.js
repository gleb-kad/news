import { PrismaClient } from '@prisma/client';
import NewsList from './NewsList';

const prisma = new PrismaClient();

// Асинхронная загрузка данных с сервера
const getNews = async () => {
  const news = await prisma.news.findMany();
  return news;
};

export default async function Home() {
  const news = await getNews();  // Получаем данные с сервера

  return (
    <div className="container mx-auto p-4">
      <h1 style={{fontSize: '48px', fontWeight: 'bold' }}>Новостной Матрос</h1>

      <NewsList news={news} />  {/* Передаем данные в компонент клиента */}
    </div>
  );
}
