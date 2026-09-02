import initSqlite from '@sqlite.org/sqlite-wasm';

// Здесь будет лежать объект нашей базы данных после запуска
let db: any = null;

export const initDatabase = async () => {
  try {
    // 1. Загружаем бинарный файл SQLite WebAssembly
    const sqlite3 = await initSqlite();

    // 2. Открываем или создаем файл базы данных в приватной системе браузера (OPFS)
    if ('opfs' in sqlite3) {
      db = new sqlite3.oo1.OpfsDb('/earnings_tracker.db', 'c');
      console.log('SQLite запущен в приватной файловой системе браузера (OPFS)');
    } else {
      // На случай, если старый браузер не поддерживает OPFS, создаем базу в оперативной памяти
      db = new sqlite3.oo1.DB('/earnings_tracker.db', 'c');
      console.log('SQLite запущен в оперативной памяти (fallback)');
    }

    // 3. Создаем таблицу для наших смен прямо внутри этого файла
    db.exec(`
      CREATE TABLE IF NOT EXISTS shifts (
        id TEXT PRIMARY KEY,
        hours_worked REAL NOT NULL,
        earnings REAL NOT NULL,
        tips REAL NOT NULL,
        date TEXT NOT NULL
      );
    `);

    return db;
  } catch (err) {
    console.error('Не удалось запустить SQLite:', err);
    throw err;
  }
};

export const getDB = () => {
  if (!db) {
    throw new Error('База данных еще не инициализирована! Сначала вызовите initDatabase()');
  }
  return db;
};
