import styled from 'styled-components';

interface CardProps {
  width?: string
  margin?: string | number
  padding?: string | number
  primary?: boolean
}

export default styled.div<CardProps>`
  box-sizing: border-box;
  width:${({ width }) => (width || '100%')};
  margin: ${({ margin }) => (margin || 0)};
  padding: ${({ padding }) => (padding || 0)};
  background: ${({ primary, theme }) => (primary ? theme.color.primary : theme.color.white)};
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
