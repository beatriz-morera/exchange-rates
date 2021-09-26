import styled from 'styled-components';

export const CurreciesContainer = styled.div`
  h2{
    font-size: 20px;
    padding: 20px;
    color: #fff;
    border-bottom: ${({ theme }) => `0.5px solid ${theme.color.mask}`};
  };

  ul{
    list-style: none;
    height: calc(100vh - (150px));
    overflow: auto;
  }

`;
