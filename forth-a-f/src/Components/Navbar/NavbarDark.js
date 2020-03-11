import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
  position: relative;
`;

const StyledList = Styled.ul`
  @media(max-width: 700px) {
    &.large-nav {
      display: none;
    }
  }
`;

const StyledListItem = Styled.li`
  display: inline;
  padding-right: 40px;
  color: black;
  font-weight: bold;
  font-size: 1em;

`;

const StyledLink = Styled.a`
  text-decoration: none;
  color: #595959;
  &:hover {
    color: black;
  }
  &.active {
    color: black;
  }
`;

const StyledMenuDiv = Styled.div`
  width: 80vw;
  height: 100vh;
  background-color: black;
  transform: translate(-80vw, 0);
  transition: 1s;
  margin-top: -10px;
  border: 0;
  padding: 0;
  opacity: 0.8;
  display: grid;
  grid-template-rows: repeat(10, 60px);
  color: white;
  position: absolute;
  z-index: 150;

  &.open {
    transform: translate(0,0);
  }

  @media(min-width: 700px){
    display: none;
  }
`

const StyledMenuTitle = Styled.h3`
  color: #EBDEBC;
  justify-self: center;
  align-self: center;
  font-size: 1.5em;
`

const StyledSearchBar = Styled.input`
width: 70%;
height: 80%;
margin: auto;
border-radius: 50px;
padding-left: 10px;
border: none;
background-color: #EBDEBC;
font-size: 1.2em;
&:focus {
  outline: 0;
}
`

const StyledMenuLink = Styled.a`
  text-decoration: none;
  color: #EBDEBC;
`;

const StyledMenuItem = Styled.div`
  justify-self: center;
  align-self: center;
  font-size: 1.2em;
`

const itemHref = (itemName) => {
  return itemName.replace(/\s+/g, '');
}

const handleClick = (event) => {
  document.querySelector('.nav-list .active').classList.remove('active')
  event.target.classList.add('active');
}

const navbarDark = (props) => {
  return (
    <StyledWrapper>
      <StyledList className="nav-list large-nav">
        {props.categories.map((item, index) => {
          return (
            <StyledListItem key={index}>
              <StyledLink onClick={handleClick} className={index === 0 ? "active" : null} href={`#${itemHref(item)}`}>
                {item.toUpperCase()}
              </StyledLink>
            </StyledListItem>
          )
        })}
      </StyledList>
      <StyledMenuDiv className="nav-list small-nav">
        <StyledMenuTitle>Menu</StyledMenuTitle>
        <StyledSearchBar placeholder="Search..." />
        {props.categories.map((item, index) => {
          return (
            <StyledMenuItem key={index}>
              <StyledMenuLink href={`#${itemHref(item)}`}>
                {item.toUpperCase()}
              </StyledMenuLink>
            </StyledMenuItem>
          )
        })}
      </StyledMenuDiv>
    </StyledWrapper>
  );
}

export default navbarDark;
