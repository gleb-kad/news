'use client';  // Указание, что этот компонент работает на клиенте

import { useState } from 'react';
import Link from 'next/link';

export default function NewsList({ news }) {
  const [search, setSearch] = useState("");  // Хук работает только на клиенте

  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Поиск */}
      <input
        type="text"
        style={{
            color: "black", // Цвет вводимого текста
            backgroundColor: "#f0f0f0", // Цвет фона
            fontSize: "16px", // Размер шрифта
            padding: "8px", // Внутренние отступы
            border: "1px solid #ccc", // Граница
            borderRadius: "4px", // Скругленные углы
          }}
        className="p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Список новостей */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`}>
  <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-white hover:bg-gray-100">
    <h2 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h2>
    <p className="text-gray-600">{item.description.slice(0, 100)}...</p>
  </div>
</Link>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">Нет результатов поиска</div>
        )}
      </div>
    </div>
  );
}
