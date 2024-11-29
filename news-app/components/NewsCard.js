export default function NewsCard({ title, description, imageUrl, createdAt}) {
  const imageSrc = imageUrl || '/citty.jpg'; // если нет URL, используем дефолтное изображение

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow bg-white h-full">
      <div className="relative h-48 w-full">
        <img
          src={imageSrc}  // вставляем URL картинки
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-black text-sm">{createdAt}</p>
      </div>
    </div>
  );
}
