import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
  background-color: black;
  color: white;
  display: grid;

  @media (min-width: 700px){
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledSection = Styled.div`
  min-width: 300px;
  text-align: center;

  @media (min-width: 700px){
    text-align: left;
    margin: auto;
  }
`;

const StyledLink = Styled.a`
  color: white;
  text-decoration: none;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const StyledList = Styled.ul`
padding: 0;
margin: 0;
`;

const StyledListItem = Styled.li`
  list-style-type: none;
  padding: 10px;

`;

const StyledCopySec = Styled.p`
  text-align: center;
  &.websiteBy {
    font-size: 0.7em;
  }

  &.websiteBy a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterComponent = (props) => {
  return (
    <StyledWrapper>
      <StyledSection>
        <h3>CONTACT US</h3>
        <StyledLink href='mailto:forthavenuefragrance@outlook.com'>forthavenuefragrance@outlook.com</StyledLink>
      </StyledSection>
      <StyledSection>
        <h3>USEFUL LINKS</h3>
        <StyledList>
          <StyledListItem onClick={props.clicked}><StyledLink>About Us</StyledLink></StyledListItem>
          <StyledListItem onClick={props.clicked}><StyledLink>Shipping Policy</StyledLink></StyledListItem>
          <StyledListItem onClick={props.clicked}><StyledLink>Refund Policy</StyledLink></StyledListItem>
          <StyledListItem onClick={props.clicked}><StyledLink>Privacy Policy</StyledLink></StyledListItem>
          <StyledListItem onClick={props.clicked}><StyledLink>Terms of Service</StyledLink></StyledListItem>
        </StyledList>
      </StyledSection>
      <StyledCopySec>&copy; 2020 Forth Avenue Fragrance</StyledCopySec>
      <StyledCopySec className="websiteBy">Website by Kevin Beall. <a href="mailto:kevinbealldev@gmail.com">kevinbealldev@gmail.com</a></StyledCopySec>
    </StyledWrapper >
  );
}

export default FooterComponent;