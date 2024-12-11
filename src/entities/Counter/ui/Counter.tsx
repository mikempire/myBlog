import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';

import { useTranslation } from 'react-i18next';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const inc = () => {
    dispatch(counterActions.increment());
  };
  const dec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <p data-testid="value-title">
        {counterValue}
      </p>
      <Button
        onClick={inc}
        data-testid="inc-btn"
      >
        {t('inc')}
      </Button>
      <Button
        onClick={dec}
        data-testid="dec-btn"
      >
        {t('dec')}
      </Button>
    </div>
  );
};
