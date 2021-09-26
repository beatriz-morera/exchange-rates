import { Currency as CurrencyModel } from '../../models';
import { CurrencyContainer } from './Currency.styled';

interface CurrencyProps {
  currency: string
  rate: number
  active?: boolean
  onSelect: (value: CurrencyModel) => void
}

const Currency: React.FC<CurrencyProps> = ({
  currency, rate, active, onSelect,
}) => (
  <li>
    <CurrencyContainer
      active={active}
      onClick={() => onSelect({ currency, rate })}
      data-testid="currency"
    >
      <h4>{currency}</h4>
      <p>{rate?.toFixed(3)}</p>
    </CurrencyContainer>
  </li>
);

export default Currency;
