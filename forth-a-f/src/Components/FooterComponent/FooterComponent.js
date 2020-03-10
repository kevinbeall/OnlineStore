import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
  background-color: black;
  color: white;
  display: grid;
`;

const StyledSection = Styled.div`
  min-width: 300px;
  text-align: center;
`;

const StyledLink = Styled.a`
  color: white;
  text-decoration: none;
  opacity: 0.8;

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
          <StyledListItem><StyledLink>About Us</StyledLink></StyledListItem>
          <StyledListItem><StyledLink>Shipping Policy</StyledLink></StyledListItem>
          <StyledListItem><StyledLink>Refund Policy</StyledLink></StyledListItem>
          <StyledListItem><StyledLink>Privacy Policy</StyledLink></StyledListItem>
          <StyledListItem><StyledLink>Terms of Service</StyledLink></StyledListItem>
        </StyledList>
      </StyledSection>
      <StyledCopySec>&copy; 2020 Forth Avenue Fragrance</StyledCopySec>
    </StyledWrapper >
  );
}

export default FooterComponent;