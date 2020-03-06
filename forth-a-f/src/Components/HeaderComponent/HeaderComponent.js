import React from 'react';
import Styled from 'styled-components';
import searchIcon from '../../Assets/Images/001-search.svg';
import cart from '../../Assets/Images/002-shopping-cart.svg';

const StyledHeader = Styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  `;

const StyledLogo = Styled.h1`
  border: 3px solid black;
  display: inline-block;
  padding: 20px;
  width: 400px;
  text-align: center;
`;

const StyledCartSearch = Styled.div`
  display: inline-block;
  justify-self: right;
  align-self: center;
`

const StyledImage = Styled.img`
  padding-right: 15px;
`;

const headerComponent = (props) => {
  return (
    <StyledHeader>
      <StyledLogo>Forth Avenue Fragrance</StyledLogo>
      <StyledCartSearch>
        <StyledImage src={searchIcon} alt="searchButton" height="24px" width="24px" />
        <StyledImage src={cart} alt="searchButton" height="24px" width="24px" />
      </StyledCartSearch>
    </StyledHeader>
  )
}

export default headerComponent;