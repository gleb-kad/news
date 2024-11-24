export default function NewsCard({ title, description, imageUrl }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        {imageUrl && <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4" />}
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  