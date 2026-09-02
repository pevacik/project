import type { Page } from '../../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  return (
    <div className="home">
      <h1 className="home__title">Учет заработка</h1>
      <p className="home__subtitle">Вносите чаевые и планируйте смены</p>

      <div className="home__menu">
        <button className="home__button home__button--tips" onClick={() => onNavigate('tips')}>
          <span className="home__button-icon">💰</span>
          <span className="home__button-text">Внести чаевые</span>
        </button>

        <button className="home__button home__button--schedule" onClick={() => onNavigate('schedule')}>
          <span className="home__button-icon">📅</span>
          <span className="home__button-text">Составить график</span>
        </button>

        <button className="home__button home__button--calendar" onClick={() => onNavigate('calendar')}>
          <span className="home__button-icon">🗓️</span>
          <span className="home__button-text">Месячный график</span>
        </button>
      </div>
    </div>
  );
};