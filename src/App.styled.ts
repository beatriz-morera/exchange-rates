import styled from 'styled-components';
import Card from './components/Card';

export const Page = styled.main`
width: 100vw;
height: 100vh;
position: absolute;
display: flex;
flex-direction: column;
`;

export const Container = styled.div`
flex: 1;
box-sizing: border-box;
display: flex;
padding: 0 24px;
position: a;

> ${Card}{
  height: calc(100vh - (124px));
}
`;

export const Title = styled.div`
h1{
  color: ${({ theme }) => theme.color.primary};
  font-size: 30px;
  margin-bottom: 10px;
};

padding: 12px 24px 24px;
`;
