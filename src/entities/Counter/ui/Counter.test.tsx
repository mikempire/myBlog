import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('inc', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    userEvent.click(screen.getByTestId('inc-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('inc', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    userEvent.click(screen.getByTestId('dec-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
