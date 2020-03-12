import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
  background-color: #666;
  padding: 20px;
  display: grid;
  grid-tempate-columns: 1fr;
  color: #EBDEBC;
`;

const StyledImage = Styled.img`
  width: 80vw;
  display: block;
  margin: auto;
`;

const StyledButtonGroup = Styled.div`
  margin: auto;
`;

const StyledButton = Styled.button`
  font-size: 1em;
  border: 1px solid black;
  background-color: transparent;
  padding: 10px;
  color: #EBDEBC;
  font-weight: bold;

  &.selected {
    background-color: #EBDEBC;
    color: #666;

  }

  &.first {
    border-radius: 25px 0 0 25px;
    padding-left: 25px;
  }

  &.last {
    border-radius: 0 25px 25px 0;
    padding-right: 25px;
  }

  &:focus {
    outline: none;
  }
`;

const StyledPricing = Styled.p`
  font-size: 2em;
`;


const Product = (props) => {
  const prodObj = props.products.productInfo.find(element => element.image === props.image)



  return (
    <StyledWrapper>
      <StyledImage src={require(`../../Assets/ProductImage/${props.image}`)} />
      <p>{prodObj.productDesc}</p>
      {/* <select className="test">
        {prodObj.productVariation.map(variation => {
          return (
            <option value={variation}>{variation}</option>
          );
        })}
      </select> */}
      <StyledButtonGroup>
        <StyledButton onClick={props.click} value="snapBar" className="first selected variation-button" type="button">Snap Bar</StyledButton>
        <StyledButton onClick={props.click} value="individual" type="button" className="variation-button">Individuals</StyledButton>
        <StyledButton onClick={props.click} className="last variation-button" value="sample" type="button">Sample</StyledButton>
      </StyledButtonGroup>
      <StyledPricing>Price: {props.price}</StyledPricing>
      <StyledButton>Add to Basket</StyledButton>
    </StyledWrapper>
  );
}

export default Product;