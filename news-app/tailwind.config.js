// tailwind.config.js
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Путь для всех файлов в папке 'app'
    './pages/**/*.{js,ts,jsx,tsx}', // Путь для всех страниц в папке 'pages'
    './components/**/*.{js,ts,jsx,tsx}', // Путь для компонентов (если такие есть)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
