import { RateHistory, Currency } from '../models';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function getDates() {
  const datesArray = new Array(7).fill(1);

  return datesArray.map((_, index) => {
    const d = new Date();
    d.setDate(d.getDate() - index);

    const year = d.getFullYear();
    const month = (`00${d.getMonth() + 1}`).slice(-2);
    const day = (`00${d.getDate()}`).slice(-2);

    return `${year}-${month}-${day}`;
  }).reverse();
}

export async function getRates(): Promise<Currency[]> {
  const response = await fetch(`${BASE_URL}/v1/latest?access_key=${API_KEY}&format=1`);
  const data = await response.json();
  return Object.entries(data.rates).map(([currency, rate]) => ({ currency, rate: Number(rate) }));
}

async function getHistoricalRate(date: string, currency: string): Promise<RateHistory> {
  const response = await fetch(`${BASE_URL}/v1/${date}?access_key=${API_KEY}&symbols=${currency}&format=1`);
  const data = await response.json();
  return { date, rate: data.rates[currency] };
}

export async function get7DaysRates(currency: string): Promise<RateHistory[]> {
  const dates = getDates();

  const fetchRates = dates.map((date) => getHistoricalRate(date, currency));

  const data = await Promise.allSettled(fetchRates);

  return data.reduce<RateHistory[]>((acc, c) => {
    if (c.status === 'fulfilled') {
      acc.push(c.value);
    }
    return acc;
  }, []);
}
