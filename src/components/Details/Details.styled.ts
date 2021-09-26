import styled from 'styled-components';
import Card from '../Card';

export const DetailsContainer = styled.div`
  width: 100%;
  height: calc(100vh - (180px));
  display: flex;
  flex-direction: column;

  > ${Card}{
    max-height: 100%;
    box-sizing: border-box;
    padding: 24px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  h3{
    font-size: 24px;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const ChartContainer = styled.div`
  box-sizing: border-box;
  flex: 1;
  min-height: calc(100vh - (330px));
`;

export const ExtraCardsContainer = styled.div`
  width: 100%;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;

  ${Card}{
    box-sizing: border-box;
    padding: 24px;
    color:  ${({ theme }) => theme.color.white};

    p{
      color: ${({ theme }) => theme.color.text}
    }

    strong{
      font-size: 20px;
    }

    div{
      margin-top: 12px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
