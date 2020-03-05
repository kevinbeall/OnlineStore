import React from 'react';
import Styled from 'styled-components';

const StyledHeader = Styled.div`
  margin: 50px;
`;

const StyledLogo = Styled.h1`
  border: 5px solid black;
  display: inline;
  padding: 30px;
`;

const headerComponent = (props) => {
  return (
    <StyledHeader>
      <StyledLogo>Forth Avenue Fragrance</StyledLogo>
    </StyledHeader>
  )
}

export default headerComponent;