// Главная страница
import { PrismaClient } from '@prisma/client';
import NewsList from '../../components/NewsList';
import Header from '@/components/Header';

const prisma = new PrismaClient();

// Асинхронная загрузка данных с сервера
const getNews = async () => {
  const news = await prisma.news.findMany();
  return news;
};

export default async function Home() {
  const news = await getNews(); // Получаем данные новостей

  
  return (
    <div>
      <Header />


      <div className="h-screen flex items-center justify-center bg-gray-700">
  <nav className="space-x-4 text-center text-white">
    <a href="/about" className="block hover:text-blue-300 ">О нас</a>
    <a href="/contacts" className="block hover:text-blue-300">Контакты</a>
    <a href="/help" className="block hover:text-blue-300">Помощь</a>
  </nav>
</div>




  

      {/* Список новостей */}
      <main className="container mx-auto py-8 px-6">
        <NewsList news={news} />
      </main>
    </div>
  );
}
