import { RateHistory } from '../../models';

export function get7DaysRates(): Promise<RateHistory[]> {
  return import('./fixtures/rate-history.json').then((rs) => rs.default);
}
