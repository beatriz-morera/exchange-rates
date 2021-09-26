import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useCurrencies } from './hooks/useCurrencies';
import Card from './components/Card';
import Details from './components/Details/Details';
import Currencies from './components/Currencies/Currencies';

import { theme } from './theme';
import { Page, Title, Container } from './App.styled';
import { Currency } from './models';

const App = () => {
  const [activeCurrency, setActiveCurrency] = useState<Currency>();
  const { currencies, loading } = useCurrencies();

  useEffect(() => {
    if (currencies?.length) {
      setActiveCurrency(currencies[0]);
    }
  }, [currencies]);

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <ThemeProvider theme={theme}>
      <Page>
        <Title>
          <h1>Exchange rates app</h1>
          <p>Select a currency to see last 7 days historical rates</p>
        </Title>
        <Container>
          <Card primary width="300px" margin="0 24px 0 0">
            <Currencies
              currencies={currencies}
              loading={loading}
              activeCurrency={activeCurrency}
              setActiveCurrency={(active: Currency) => setActiveCurrency(active)}
            />
          </Card>
          {activeCurrency && <Details {...activeCurrency} />}
        </Container>
      </Page>
    </ThemeProvider>
  );
};

export default App;
