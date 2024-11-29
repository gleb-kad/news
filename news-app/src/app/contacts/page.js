
import Header from '@/components/Header';

export default function Contacts() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold mb-4">Контакты</h1>
        <p className="text-lg">Вы можете связаться с нами через следующие каналы:</p>
        <ul className="mt-4 space-y-2">
          <li>Email: <a href="mailto:info@company.com" className="text-blue-500">info@company.com</a></li>
          <li>Телефон: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></li>
        </ul>
      </div>
    </div>
  );
}
