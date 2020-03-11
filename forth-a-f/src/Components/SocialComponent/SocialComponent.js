import React from 'react';
import Styled from 'styled-components';
import InstagramEmbed from 'react-instagram-embed';

const StyledDiv = Styled.div`
  background-color: #666;
  width: 90%;
  margin: 50px auto 25px auto;
  display: grid;
  justify-content: center;

  &.hidden {
    display: none;
  }

  @media(min-width: 1200px) {
    display: grid;
    grid-template-rows: 100px 1fr;
  }

`

const StyledHeading = Styled.h3`
  color: #EBDEBC;
  text-align: center;
  font-size: 1.4em;

  @media(min-width: 1200px) {
    font-size: 2em;
  }
`

const StyledSection = Styled.div`
  @media(min-width: 1200px){
    padding: 50px;
    align-self: center;
  }

  @media(max-width: 1199px){
  &.socialTags {
    display: none;
  }
}
`;

const StyledGridWrapper = Styled.div`
  @media(min-width: 1200px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;


const SocialComponent = (props) => {
  return (
    <StyledDiv className="SocialFeed">
      <StyledHeading>Follow us on Social Media</StyledHeading>
      <StyledGridWrapper>
        <StyledSection>
          <InstagramEmbed
            url='https://www.instagram.com/p/B9b3IOWAJLV/'
            maxWidth={300}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => { }}
            onSuccess={() => { }}
            onAfterRender={() => { }}
            onFailure={() => {
              document.querySelector('.SocialFeed').classList.add('hidden');
            }}
          />
        </StyledSection>
        <StyledSection className="socialTags">
          <StyledHeading>@forthavenuefragrance</StyledHeading>
          <StyledHeading>On Instagram</StyledHeading>
          <StyledHeading>And</StyledHeading>
          <StyledHeading>Facebook</StyledHeading>
        </StyledSection>
      </StyledGridWrapper>
    </StyledDiv >
  );
}

export default SocialComponent;