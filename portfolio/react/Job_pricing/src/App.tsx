import { useState } from 'react';
import { Home } from './pages/home';
import { TipsPage } from './pages/tips';
import { SchedulePage } from './pages/schedule';
import { CalendarPage } from './pages/calendar';

export type Page = 'home' | 'tips' | 'schedule' | 'calendar';

function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      {page === 'home' && <Home onNavigate={navigate} />}
      {page === 'tips' && <TipsPage onBack={() => navigate('home')} />}
      {page === 'schedule' && <SchedulePage onBack={() => navigate('home')} />}
      {page === 'calendar' && <CalendarPage onBack={() => navigate('home')} />}
    </div>
  );
}

export default App;