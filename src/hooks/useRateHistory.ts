import { useState, useEffect } from 'react';
import { RateHistory } from '../models';
import { get7DaysRates } from '../services/api';

export function useRateHistory(currency: string) {
  const [rateHistory, setRateHistory] = useState<RateHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => currency && setLoading(true), 500);
    if (currency) {
      get7DaysRates(currency).then((data) => {
        if (data?.length) {
          setRateHistory(data);
          clearTimeout(timeout);
          setLoading(false);
        }
      });
    }
    return () => clearTimeout(timeout);
  }, [currency]);

  return { rateHistory, loading };
}
