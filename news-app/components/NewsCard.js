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
      <h2 className="text-[48px] text-[#4169E1] font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
