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
`

const StyledHeading = Styled.h3`
  color: #EBDEBC;
  text-align: center;
  font-size: 1.4em;
`



const SocialComponent = (props) => {
  return (
    <StyledDiv className="SocialFeed">
      <StyledHeading>Follow us on Instagram!</StyledHeading>
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
    </StyledDiv >
  );
}

export default SocialComponent;