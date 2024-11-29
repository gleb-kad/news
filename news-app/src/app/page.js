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

      {/* Синий блок с поиском и навигацией */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Поле поиска */}
          <input
            type="text"
            placeholder="Поиск новостей..."
            className="p-2 rounded-md border border-gray-300 w-1/3 bg-gray-50 text-black"
          />

          {/* Ссылки */}
          <nav className="flex space-x-4">
            <a href="/about" className="hover:text-blue-300">
              О нас
            </a>
            <a href="/contacts" className="hover:text-blue-300">
              Контакты
            </a>
            <a href="/help" className="hover:text-blue-300">
              Помощь
            </a>
          </nav>
        </div>
      </div>

      {/* Список новостей */}
      <main className="container mx-auto py-8 px-6">
        <NewsList news={news} />
      </main>
    </div>
  );
}
