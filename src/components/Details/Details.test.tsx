import { ThemeProvider } from 'styled-components';
import {
  render, waitFor, cleanup,
} from '@testing-library/react';
import { theme } from '../../theme';

import Details from './Details';

jest.mock('../../services/api');
jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

describe('deatils tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should show active currency exchange rate correctly', async () => {
    expect.assertions(2);

    const currency = 'AED';
    const rate = 4.304841;

    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <Details
          currency={currency}
          rate={rate}
        />
      </ThemeProvider>,
    );

    const currencies = await waitFor(() => getAllByText((text) => text.includes(currency)));
    const rates = await waitFor(() => getAllByText((text) => text.includes(rate.toFixed(3))));

    expect(currencies.length).toBeGreaterThan(0);
    expect(rates.length).toBeGreaterThan(0);
  });
});
