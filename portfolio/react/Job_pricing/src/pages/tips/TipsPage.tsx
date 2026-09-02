import { AddShiftForm } from '../../features/add-shift';

interface TipsPageProps {
  onBack: () => void;
}

export const TipsPage = ({ onBack }: TipsPageProps) => {
  return (
    <div className="page">
      <button className="page__back" onClick={onBack}>
        ← Назад
      </button>
      <AddShiftForm />
    </div>
  );
};