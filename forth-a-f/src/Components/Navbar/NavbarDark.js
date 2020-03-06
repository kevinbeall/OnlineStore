import React from 'react';
import Styled from 'styled-components';

const StyledList = Styled.ul`

`;

const StyledListItem = Styled.li`
  display: inline;
  padding-right: 40px;
  color: black;
  font-weight: bold;

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

const itemHref = (itemName) => {
  return itemName.replace(/\s+/g, '');
}

const handleClick = (event) => {
  document.querySelector('.nav-list .active').classList.remove('active')
  event.target.classList.add('active');
}

const navbarDark = (props) => {
  return (
    <div>
      <StyledList className="nav-list">
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
    </div>
  );
}

export default navbarDark;
