import { useState } from 'react';

interface SchedulePageProps {
  onBack: () => void;
}

interface ShiftEntry {
  id: string;
  employee: string;
  date: string;
  startTime: string;
  endTime: string;
}

export const SchedulePage = ({ onBack }: SchedulePageProps) => {
  const [employee, setEmployee] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [shifts, setShifts] = useState<ShiftEntry[]>([]);

  const handleAddShift = (e: React.FormEvent) => {
    e.preventDefault();

    if (!employee || !date || !startTime || !endTime) {
      alert('Заполните все поля!');
      return;
    }

    const newShift: ShiftEntry = {
      id: crypto.randomUUID(),
      employee,
      date,
      startTime,
      endTime,
    };

    setShifts((prev) => [...prev, newShift]);
    setEmployee('');
    setDate('');
    setStartTime('');
    setEndTime('');
  };

  const handleRemoveShift = (id: string) => {
    setShifts((prev) => prev.filter((shift) => shift.id !== id));
  };

  return (
    <div className="page">
      <button className="page__back" onClick={onBack}>
        ← Назад
      </button>

      <h2 className="page__title">Составить график</h2>

      <form className="schedule-form" onSubmit={handleAddShift}>
        <div className="schedule-form__field">
          <label>Сотрудник</label>
          <input
            type="text"
            value={employee}
            placeholder="Имя сотрудника"
            onChange={(e) => setEmployee(e.target.value)}
          />
        </div>

        <div className="schedule-form__field">
          <label>Дата</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="schedule-form__row">
          <div className="schedule-form__field">
            <label>Начало</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>

          <div className="schedule-form__field">
            <label>Конец</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="schedule-form__submit">
          Добавить смену
        </button>
      </form>

      {shifts.length > 0 && (
        <div className="schedule-list">
          <h3>Запланированные смены</h3>
          {shifts.map((shift) => (
            <div key={shift.id} className="schedule-list__item">
              <div className="schedule-list__info">
                <strong>{shift.employee}</strong>
                <span>
                  {shift.date} · {shift.startTime}–{shift.endTime}
                </span>
              </div>
              <button
                className="schedule-list__remove"
                onClick={() => handleRemoveShift(shift.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};