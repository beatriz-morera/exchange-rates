import styled from 'styled-components';

interface CurrencyContainerProps{
  active?: boolean
}

export const CurrencyContainer = styled.button<CurrencyContainerProps>`
  outline: none;
  background: none;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${({ active }) => active && '#fff'};
  color: ${({ active, theme }) => (active ? theme.color.primary : theme.color.text)};
  transition: 0.3s ease;

  &:hover{
    box-shadow: rgba(173, 178, 184, 0.2) 0px 2px 24px;
    cursor: pointer;
  }
`;
