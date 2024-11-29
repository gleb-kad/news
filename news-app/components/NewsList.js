'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsCard from './NewsCard';

export default function NewsList({ news = [] }) { // Указываем значение по умолчанию для news
  const [search, setSearch] = useState('');

  const filteredNews = news.length
    ? news.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div>
      {/* Поиск */}
      
      {/* Список новостей */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`}>
              <NewsCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl || '/citty.png'}
                date={new Date(item.date).toLocaleDateString()}
              />
            </Link>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-600">
            Ничего подходящего не найдено
          </div>
        )}
      </div>
    </div>
  );
}
