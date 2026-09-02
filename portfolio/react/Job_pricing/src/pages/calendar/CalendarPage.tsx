import { useState } from 'react';

interface CalendarPageProps {
  onBack: () => void;
}

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const CalendarPage = ({ onBack }: CalendarPageProps) => {
  const today = new Date();
  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  // Понедельник = 0, воскресенье = 6
  const startOffset = (firstDayOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array.from({ length: startOffset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isToday = (day: number) =>
    day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  const goToPrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  const currentDateLabel = today.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="page">
      <button className="page__back" onClick={onBack}>
        ← Назад
      </button>

      <h2 className="page__title">Месячный график</h2>

      <p className="calendar__today">Сегодня: {currentDateLabel}</p>

      <div className="calendar">
        <div className="calendar__header">
          <button className="calendar__nav" onClick={goToPrevMonth}>
            ←
          </button>
          <h3 className="calendar__month">
            {MONTHS[month]} {year}
          </h3>
          <button className="calendar__nav" onClick={goToNextMonth}>
            →
          </button>
        </div>

        <div className="calendar__weekdays">
          {WEEKDAYS.map((day) => (
            <div key={day} className="calendar__weekday">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar__grid">
          {cells.map((day, index) =>
            day === null ? (
              <div key={`empty-${index}`} className="calendar__cell calendar__cell--empty" />
            ) : (
              <div
                key={day}
                className={`calendar__cell${isToday(day) ? ' calendar__cell--today' : ''}`}
              >
                <span className="calendar__day-number">{day}</span>
              </div>
            ),
          )}
        </div>

        <button className="calendar__today-btn" onClick={goToToday}>
          Сегодня
        </button>
      </div>
    </div>
  );
};