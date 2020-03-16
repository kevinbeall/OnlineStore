import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
  background-color: #666;
  padding: 15px;
  color: #EBDEBC;
`;

const StyledHome = Styled.button`
border: 3px solid #EBDEBC;
background-color: transparent;
height: 40px;
width: 90px;
color: #EBDEBC;
font-size: 1em;

&:hover {
  background-color: #EBDEBC;
  color: #666;
}
`;

const UsefulLinks = (props) => {
  return (
    <StyledWrapper>
      <StyledHome onClick={props.home}>Home</StyledHome>
      <h1>{props.title}</h1>
      {props.content.map(p => {
        return (<p>{p}</p>);
      })}
      <StyledHome onClick={props.home}>Home</StyledHome>
    </StyledWrapper>
  );
}

export default UsefulLinks;