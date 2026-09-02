import { getDB } from '../../../shared/api/sqlite';

// Описываем, какие данные функция ждет на вход
interface NewShiftPayload {
  hoursWorked: number;
  earnings: number;
  tips: number;
}

export const shiftApi = {
  // Функция для сохранения смены в SQLite
  addShift: async (data: NewShiftPayload): Promise<boolean> => {
    try {
      const db = getDB();

      // Генерируем уникальный ID для строки в базе данных
      const id = crypto.randomUUID();

      // Получаем текущую дату в формате YYYY-MM-DD
      const currentDate = new Date().toISOString().split('T')[0];

      // Пишем чистый SQL-запрос
      // Названия колонок должны строго совпадать с тем, что мы создали в sqlite.ts
      db.exec({
        sql: `INSERT INTO shifts (id, hours_worked, earnings, tips, date) VALUES (?, ?, ?, ?, ?);`,
        bind: [id, data.hoursWorked, data.earnings, data.tips, currentDate],
      });

      console.log('SQL-лог: Смена успешно записана в SQLite!', { id, currentDate, ...data });
      return true;
    } catch (error) {
      console.error('Ошибка при выполнении SQL-запроса:', error);
      return false;
    }
  },
};
