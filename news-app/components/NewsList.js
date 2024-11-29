'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NewsCard from './NewsCard';

export default function NewsList({ news }) {
  const [search, setSearch] = useState("");
  const [filteredNews, setFilteredNews] = useState(news);

  // Фильтруем новости при изменении состояния поиска
  useEffect(() => {
    const result = news.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNews(result);
  }, [search, news]);

  return (
    <div>
      
      {/* Поиск */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          style={{
            color: "#000000",
            backgroundColor: "#ffffff",
            fontSize: "16px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: '25%',
          }}
          className="p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          placeholder="Введите название новости"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Список новостей */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`}>
              <NewsCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl || '/default-news.jpg'}
                date={new Date(item.date).toLocaleDateString()}
              />
            </Link>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-600">Ничего подходящего не найдено</div>
        )}
      </div>

      {/* Стили для placeholder */}
      <style jsx>{`
        input::placeholder {
          color: #c2c7cf ;  /* Цвет текста в placeholder */
        }
      `}</style>
    </div>
  );
}
