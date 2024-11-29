
import Header from '@/components/Header';

export default function Help() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold mb-4">Помощь</h1>
        <p className="text-lg">
          Если у вас возникли проблемы или вопросы, вы можете обратиться к нашей службе поддержки. Мы готовы помочь вам решить любые вопросы.
        </p>
        <p className="mt-4">
          Прежде чем обращаться в службу поддержки, пожалуйста, ознакомьтесь с нашими <a href="/faq" className="text-blue-500">Часто задаваемыми вопросами</a>.
        </p>
      </div>
    </div>
  );
}
