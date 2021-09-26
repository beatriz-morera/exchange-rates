import { ThemeProvider } from 'styled-components';
import {
  render, waitFor, fireEvent, cleanup,
} from '@testing-library/react';
import { theme } from '../../theme';

import Currencies from './Currencies';

const currencies = [
  {
    currency: 'AED',
    rate: 4.300125,
  },
  {
    currency: 'AFN',
    rate: 102.991923,
  },
  {
    currency: 'AUD',
    rate: 1.616168,
  },
];

const getRandomIndex = (length: number) => Math.floor(Math.random() * length);

describe('currencies tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should show exchange rate correctly', async () => {
    expect.assertions(2);

    const handleActiveCurrency = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Currencies
          currencies={currencies}
          loading={false}
          activeCurrency={currencies[0]}
          setActiveCurrency={handleActiveCurrency}
        />
      </ThemeProvider>,
    );

    const currency1 = await waitFor(() => getByText(/AED/));
    const currency2 = await waitFor(() => getByText(/AUD/));

    expect(currency1).toBeInTheDocument();
    expect(currency2).toBeInTheDocument();
  });

  it('should call setActiveCurrency onSelect', async () => {
    expect.assertions(1);

    const handleActiveCurrency = jest.fn();

    const { findAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Currencies
          currencies={currencies}
          loading={false}
          activeCurrency={currencies[0]}
          setActiveCurrency={handleActiveCurrency}
        />
      </ThemeProvider>,
    );

    const currenciesList = await findAllByTestId('currency');
    const index = getRandomIndex(currenciesList.length);
    const currencyButton = currenciesList[index];

    const currency = currencyButton?.querySelector('h4')?.innerHTML;

    fireEvent.click(currencyButton);

    expect(handleActiveCurrency).toHaveBeenCalledWith(expect.objectContaining({ currency }));
  });
});
