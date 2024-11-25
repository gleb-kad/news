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
  const news = await getNews();  // Получаем данные с сервера

  return (
    <div>
      <Header />

      {/* Синий блок с заголовком и ссылками на главной странице */}
      

      {/* Список новостей */}
      <main className="container mx-auto py-8 px-6">
        <NewsList news={news} />  {/* Передаем данные новостей в компонент списка */}
      </main>
    </div>
  );
}
