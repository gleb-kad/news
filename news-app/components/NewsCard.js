export default function NewsCard({ title, description, imageUrl, link }) {
  return (
    <div className="bg-black rounded-lg shadow-md p-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={link} className="text-blue-600 hover:underline mt-4 block">Читать далее →</a>
    </div>
  );
}
