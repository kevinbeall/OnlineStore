import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
  background-color: #666;
  padding: 20px;
  display: grid;
  grid-tempate-columns: 1fr;
  color: #EBDEBC;

  @media(min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
  }
`;

const StyledImage = Styled.img`
  width: 80vw;
  display: block;
  margin: auto;

  @media(min-width: 700px) {
    width: 40vw;
    grid-column-start: 1;
  }
`;

const StyledButtonGroup = Styled.div`
  margin: auto;
  @media(min-width: 700px) {
    grid-column-start: 2;
    grid-row-start: 2;
    margin-top: 60%;
    font-size: 1.2em;
  }

  @media(min-width: 900px) {
    font-size: 1.5em;
  }

  @media(min-width: 1100px) {
    font-size: 1.8em;
  }

  @media(min-width: 1300px) {
    font-size: 2.2em;
  }
`;

const StyledButton = Styled.button`
  font-size: 1em;
  border: 3px solid #EBDEBC;
  background-color: transparent;
  padding: 10px;
  color: #EBDEBC;
  font-weight: bold;
  transition: all 0.5s;

  &.selected {
    background-color: #EBDEBC;
    color: #666;

  }

  &.first {
    border-right: none;
  }

  &.last {
    border-left: none;
  }

  &.addToBasket {
    transitions: all 1s;

    @media(min-width: 700px) {
      font-size: 1.3em;
    }

    &.added {
      background-color: green;
    }
  }

  &.gtb {
    background-color: #EBDEBC;
    color: #666;

    @media(min-width: 700px) {
      font-size: 1.3em;
    }
  }

  &.hidden {
    opacity: 0;
  }

  &:focus {
    outline: none;
  }
`;

const StyledPricing = Styled.p`
  font-size: 2em;

  @media(min-width: 700px) {
    margin-left: 50px;
    font-size: 2.5em;
  }
`;

const StyledBack = Styled.button`
border: 3px solid #EBDEBC;
background-color: transparent;
height: 40px;
width: 90px;
color: #EBDEBC;
font-size: 1em;
margin-bottom: 40px;

&:hover {
  background-color: #EBDEBC;
  color: #666;
}

@media(min-width: 1200px){
  font-size: 1em;
  padding: 15px;
  height: 55px;
  width: 120px;
}
`;

const StyledProdHead = Styled.h3`
  margin: 20px 0 20px 0;
  padding: 0;
  justify-self: center;

  @media(min-width: 700px) {
    grid-column-start: 2;
    grid-row-start: 2;
    margin-top: 50%;
    font-size: 1.5em;
  }

  @media(min-width: 1100px) {
    font-size: 1.8em;
  }

  @media(min-width: 1300px) {
    font-size: 2.2em;
  }
`;

const StyledDesc = Styled.p`
@media(min-width: 700px) {
  grid-column-start: 2;
  grid-row-start: 2;
  font-size: 1.3em;
}

@media(min-width: 1100px) {
  font-size: 1.7em;
}

@media(min-width: 1300px) {
  font-size: 2.2em;
}
`;

const StyledBasketButtons = Styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;


const Product = (props) => {
  console.log(props);
  const prodObj = props.products.productInfo.find(element => element.image === props.image)

  return (
    <StyledWrapper>
      <StyledBack onClick={props.backClick}>Back</StyledBack>
      <StyledImage src={require(`../../Assets/ProductImage/${props.image}`)} />
      <StyledDesc>{prodObj.productDesc}</StyledDesc>
      {/* <select className="test">
        {prodObj.productVariation.map(variation => {
          return (
            <option value={variation}>{variation}</option>
          );
        })}
      </select> */}
      <StyledProdHead>Select product</StyledProdHead>
      <StyledButtonGroup>
        <StyledButton onClick={props.click} value="snapBar" className="first variation-button" type="button">Snap Bar</StyledButton>
        <StyledButton onClick={props.click} value="individual" type="button" className="variation-button">Individuals</StyledButton>
        <StyledButton onClick={props.click} className="last variation-button" value="sample" type="button">Sample</StyledButton>
      </StyledButtonGroup>
      <StyledPricing className="price hidden">Price: £{(props.price / 100).toFixed(2)}</StyledPricing>
      <StyledBasketButtons>
        <StyledButton className="addToBasket hidden" onClick={() => props.addToBasketClick(prodObj)}>{props.buttonText}</StyledButton>
        <StyledButton onClick={props.goToBasketClick} className="gtb hidden">Go To Basket</StyledButton>
      </StyledBasketButtons>
    </StyledWrapper>
  );
}

export default Product;