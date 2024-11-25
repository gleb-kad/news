import Link from 'next/link';  // Импортируем Link для навигации
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white] h-[300px] bg-opacity-70" style={{ backgroundImage: 'url("/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Картинка слева */}
      <div className="flex items-center">
        {/* Делаем картинку кликабельной и ссылающейся на главную страницу */}
        <Link href="/">
          <Image 
            src="/cat.jpg"  // Путь к новому изображению
            alt="Logo" 
            width={200} // Ширина картинки
            height={50} // Высота картинки
            className="mr-2" // Отступ от картинки к тексту
          />
        </Link>
        
        {/* Делаем заголовок кликабельным */}
        <Link href="/">
          {/* <h1 className="text-5xl font-bold">Новостной Матрос</h1> */}
        </Link>
      </div>

      {/* Могут быть дополнительные элементы справа */}
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/news" className="hover:text-gray-400">Новости</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">О нас</Link></li>
          <li><Link href="/contacts" className="hover:text-gray-400">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}
