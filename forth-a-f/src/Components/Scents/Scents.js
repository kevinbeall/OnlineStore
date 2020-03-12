import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: auto;
  position: relative;
  @media (min-width: 700px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const StyledItemCont = Styled.div`
  background-color: #666;
  width: 90%;\
  justify-self: center;
  text-align: center;
  color: #EBDEBC;
  margin-bottom: 20px;
  padding: 30px 0;

  &.home {
    align-self: center;
    font-size: 1.4em;
  }
`;

const StyledImage = Styled.img`
  width: 90%;
`;

const Scents = (props) => {
  return (
    <StyledWrapper onClick={props.click}>
      <StyledItemCont className="home" onClick={props.homeClick}>Home</StyledItemCont>
      {props.scents.productInfo.map((product, index) => {
        return (
          <StyledItemCont key={product.productCode}>
            <StyledImage src={require(`../../Assets/ProductImage/${product.image}`)} />
          </StyledItemCont>
        )
      })
      }
    </StyledWrapper>
  );
}

export default Scents;