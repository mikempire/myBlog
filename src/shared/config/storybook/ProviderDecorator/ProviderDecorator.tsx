import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const ProviderDecorator = (story: () => Story) => (
  <StoreProvider>
    {story()}
  </StoreProvider>
);
