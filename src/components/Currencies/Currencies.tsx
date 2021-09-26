import Loading from '../Loading';
import Currency from './Currency';
import { CurreciesContainer } from './Currencies.styled';
import { Currency as CurrencyModel } from '../../models';

interface CurrenciesProps {
  currencies?: CurrencyModel[]
  loading: boolean
  activeCurrency?: CurrencyModel
  setActiveCurrency?: (value: CurrencyModel) => void
}

const Currencies: React.FC<CurrenciesProps> = ({
  currencies, loading, activeCurrency, setActiveCurrency,
}) => (
  <CurreciesContainer>
    <h2>Currencies</h2>
    {loading ? <Loading height="calc(100vh - (150px))" /> : (
      <ul>
        {currencies?.map(({ currency, rate }) => (
          <Currency
            key={currency}
            currency={currency}
            rate={rate}
            active={activeCurrency?.currency === currency}
            onSelect={() => setActiveCurrency?.({ currency, rate })}
          />
        ))}
      </ul>
    )}
  </CurreciesContainer>
);

export default Currencies;
