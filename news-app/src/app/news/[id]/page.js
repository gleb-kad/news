// Страница конкретной новости
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard'; // Этот компонент можно использовать для отображения самой новости

export default function NewsPage() {
  const news = {
    id: 1,
    title: 'Заголовок новости',
    description: 'Описание новости...',
    imageUrl: 'https://via.placeholder.com/300x150',
    link: '/news/1',
  };

  return (
    <div>
      <Header />
      

      {/* Сам компонент с контентом новости */}
      <main className="container mx-auto py-8 px-6">
        <NewsCard
          key={news.id}
          title={news.title}
          description={news.description}
          imageUrl={news.imageUrl}
          link={news.link}
        />
      </main>
    </div>
  );
}
