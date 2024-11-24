import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function NewsDetails({ params }) {
  // Ensure that params are awaited before use
  const { id } = await params;

  // Now proceed with fetching the news item
  const newsItem = await prisma.news.findUnique({
    where: { id: parseInt(id) },
  });

  if (!newsItem) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl text-red-600">News not found</h2>
      </div>
    );
  }

  const { title, description, createdAt, imageUrl } = newsItem;

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-blue-100 to-white">
      {/* Заголовок новости */}
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">{title}</h1>

      {/* Картинка новости (если она есть) */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
        />
      )}

      {/* Описание новости */}
      <p className="text-gray-700 text-lg mb-6">{description}</p>

      {/* Дата публикации */}
      <p className="text-gray-500 text-sm text-center">Published on: {new Date(createdAt).toLocaleDateString()}</p>
    </div>
  );
}
