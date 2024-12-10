import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface BugButtonProps {
  className?: string;
}

// Имитация ошибки
export const BugButton = ({ className }: BugButtonProps) => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error('Имитация ошибки');
    }
  }, [error]);

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={() => setError(true)}
    >
      {t('Ошибка')}
    </Button>
  );
};
