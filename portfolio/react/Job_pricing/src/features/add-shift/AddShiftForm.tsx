import { useState } from 'react';
import { shiftApi } from '../../entities/shift';

export const AddShiftForm = () => {
  const [hours, setHours] = useState('');
  const [earnings, setEarnings] = useState('');
  const [tips, setTips] = useState('');

  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const newShift = {
      date: currentDate,
      hoursWorked: Number(hours),
      earnings: Number(earnings),
      tips: Number(tips || 0),
    };

    const success = await shiftApi.addShift(newShift);

    if (success) {
      alert('Смена успешно сохранена в базу данных!');

      // Очищаем поля формы для новой записи
      setHours('');
      setEarnings('');
      setTips('');
    } else {
      alert('Что-то пошло не так при сохранении...');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Добавить смену</h2>
      <p>Дата: {currentDate}</p>

      <div>
        <label>Часы</label>
        <input
          type="number"
          value={hours}
          step="0.1"
          onChange={(e) => setHours(e.target.value)}
        />
      </div>

      <div>
        <label>Заработок</label>
        <input
          type="number"
          value={earnings}
          onChange={(e) => setEarnings(e.target.value)}
        />
      </div>

      <div>
        <label>Чайвые</label>
        <input
          type="number"
          value={tips}
          onChange={(e) => setTips(e.target.value)}
        />
      </div>

      <button type="submit">Добавить</button>
    </form>
  );
};
