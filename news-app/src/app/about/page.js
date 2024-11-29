
import Header from '@/components/Header';

export default function About() {
  return (
    <div>
      <Header />
      <div className="container bg-white rounded-lg shadow-md overflow-hidden">
        <h1 className="text-3xl font-bold mb-4">О нас</h1>
        <p className="text-lg">
          Мы — команда, которая занимается созданием инновационных решений в области информационных технологий. Наша миссия — помочь нашим клиентам достигать их целей с помощью новейших технологий и качественного обслуживания.
        </p>
      </div>
    </div>
  );
}
