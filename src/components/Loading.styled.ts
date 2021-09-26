import styled, { keyframes } from 'styled-components';

interface LoadingContainerProps {
  height?: string
}

export const LoadingContainer = styled.span<LoadingContainerProps>`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

export const Spinner = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;

  &::after {
    content: " ";
    display: block;
    width: 40px;
    height: 40px;
    margin: 4px;
    border-radius: 50%;
    border: ${({ color, theme }) => `4px solid ${color || theme.color.white}`};
    border-color: ${({ color, theme }) => (color ? `${color} transparent ${color} transparent` : `${theme.color.white} transparent ${theme.color.white} transparent`)};
    animation: ${rotate} 1.2s linear infinite;
  }
`;
