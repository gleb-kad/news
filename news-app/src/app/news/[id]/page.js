import { PrismaClient } from '@prisma/client';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';

const prisma = new PrismaClient();

// Функция для загрузки данных о конкретной новости
const getNewsById = async (id) => {
  return await prisma.news.findUnique({
    where: { id: parseInt(id, 10) },
  });
};

export default async function NewsPage({ params }) {
  // await для получения params
  const { id } = await params; 
  const news = await getNewsById(id);

  if (!news) {
    return <div className="text-center text-red-600">Новость не найдена</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto py-8 px-6">
        <NewsCard
          title={news.title}
          description={news.description}
          imageUrl={news.imageUrl || '/citty.jpg'}
          date={new Date(news.date).toLocaleDateString()}
        />
      </main>
    </div>
  );
}
