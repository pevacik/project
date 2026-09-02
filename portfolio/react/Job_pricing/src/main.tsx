import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initDatabase } from './shared/api/sqlite';

initDatabase()
  .then(() => {
    // Если база успешно запустилась — монтируем React-приложение
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  })
  .catch((error) => {
    console.error('Критическая ошибка при запуске базы данных:', error);
  });
