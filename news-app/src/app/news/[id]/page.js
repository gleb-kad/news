import Header from '@/components/Header';
import { PrismaClient } from '@prisma/client';
import NewsCard from '../../../../components/NewsCard';

const prisma = new PrismaClient();

export default async function NewsPage({ params }) {
  const { id } = await params; // 'await' добавляется к params

  const news = await prisma.news.findUnique({
    where: { id: parseInt(id) },
  });

  if (!news) {
    return (
      <div>
        <Header />
        <main className="container mx-auto py-8 px-6">
          <p>Новость не найдена.</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto py-8 px-6">
        {/* <NewsCard /> */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-[48px] font-bold text-[#4169E1] mb-2 mx-auto">{news.title}</h1>
          <p className="text-sm text-gray-500 mb-4">Дата: {new Date(news.createdAt).toLocaleDateString()}</p>
          <img
            src={news.imageUrl || '/default-news.jpg'} // URL изображения или заглушка
            alt={news.title}
            className="w-full h-auto rounded-md mb-4"
          />
          <p className="text-gray-700">{news.description}</p>
        </div>
      </main>
    </div>
  );
}
