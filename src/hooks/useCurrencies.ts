import { useState, useEffect } from 'react';
import { Currency } from '../models';
import { getRates } from '../services/api';

export function useCurrencies() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currencies.length) return;
    const res = getRates();
    res.then((data) => {
      if (data?.length) {
        setCurrencies(data);
        setLoading(false);
      }
    });
  }, [currencies]);

  return { currencies, loading };
}
