import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { Line } from 'react-chartjs-2';

import { useRateHistory } from '../../hooks/useRateHistory';

import Card from '../Card';
import {
  DetailsContainer, ChartContainer, Title, ExtraCardsContainer,
} from './Details.styled';
import { getFulllDate, getMonthAndDay } from '../../services/formatDate';
import Loading from '../Loading';
import { Currency } from '../../models';

const Details: React.FC<Currency> = ({ currency, rate }) => {
  const theme = useContext(ThemeContext);
  const { rateHistory, loading } = useRateHistory(currency);

  const data = {
    labels: rateHistory.map(({ date }) => getMonthAndDay(date)),
    datasets: [
      {
        label: 'Day Rate',
        data: rateHistory.map((el) => el.rate),
        fill: false,
        backgroundColor: theme.color.primary,
        borderColor: theme.color.mask,
      },
    ],
  };

  const min = useMemo(() => {
    const minRate = Math.min(...rateHistory
      .map((element) => Number(element.rate)));

    return rateHistory
      .find((element) => Number(element.rate) === minRate);
  }, [rateHistory]);

  const max = useMemo(() => {
    const maxRate = Math.max(...rateHistory
      .map((element) => Number(element.rate)));

    return rateHistory
      .find((element) => Number(element.rate) === maxRate);
  }, [rateHistory]);

  return (
    <DetailsContainer>
      <ExtraCardsContainer>
        <Card primary margin="0 24px 0 0">
          {loading || !min ? <Loading />
            : (
              <>
                <p>Minimum</p>
                <div>
                  <strong>{min.rate.toFixed(3)}</strong>
                  <p>{`on ${getFulllDate(min.date)}`}</p>
                </div>
              </>
            )}
        </Card>
        <Card primary>
          {loading || !max ? <Loading />
            : (
              <>
                <p>Maximum</p>
                <div>
                  <strong>{max.rate.toFixed(3)}</strong>
                  <p>{`on ${getFulllDate(max.date)}`}</p>
                </div>
              </>
            )}
        </Card>
      </ExtraCardsContainer>
      <Card>
        <Title>
          <h3>
            {`EUR to ${currency} Chart`}
          </h3>
          <p>{`1 EUR = ${rate?.toFixed(3)} ${currency}`}</p>
        </Title>
        <ChartContainer>
          {loading ? <Loading height="calc(100vh - (400px))" color={theme.color.primary} /> : <Line data={data} />}
        </ChartContainer>
      </Card>
    </DetailsContainer>
  );
};

export default Details;
