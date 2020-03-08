import React from 'react';
import Styled from 'styled-components';
import searchIcon from '../../Assets/Images/001-search.svg';
import cart from '../../Assets/Images/002-shopping-cart.svg';

const StyledHeader = Styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  `;

const StyledLogo = Styled.span`
  border: 2px solid black;
  display: inline-block;
  padding: 10px;
  font-size: 1em;
  width: 200px;
  text-align: center;
`;

const StyledCartSearch = Styled.div`
  display: inline-block;
  justify-self: right;
  align-self: center;
`

const StyledImage = Styled.img`
  &.search {
    display: none;
  }
`;

const StyledBurger = Styled.div`
  display: none;

  @media(max-width: 400px){
    display: inline-block;
    height: 20px;
    width: 30px;
    justify-self: left;
    align-self: center;
  }
`

const StyledBurgerLine = Styled.div`
  width: 30px;
  height: 4px;
  background-color: black;
  margin-bottom: 5px;
  border-radius: 10px;
  transition: all 1s;

  &.selected.top {
    transform: rotate(-45deg) translate(-5px, 7.5px) scale(1.2, 1);
  }

  &.selected.bottom {
    transform: rotate(45deg) translate(-5px, -7.5px) scale(1.2, 1);
  }

  &.selected.middle {
    opacity: 0;
  }


`

const headerComponent = (props) => {
  return (
    <StyledHeader>
      <StyledBurger className="burgerMenu" onClick={props.clicked}>
        <StyledBurgerLine className="burger-line top" />
        <StyledBurgerLine className="burger-line middle" />
        <StyledBurgerLine className="burger-line bottom" />
      </StyledBurger>
      <StyledLogo>Forth Avenue Fragrance</StyledLogo>
      <StyledCartSearch>
        <StyledImage className="search" src={searchIcon} alt="searchButton" height="24px" width="24px" />
        <StyledImage src={cart} alt="cart Button" height="24px" width="24px" />
      </StyledCartSearch>
    </StyledHeader>
  )
}

export default headerComponent;