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
  border: 1px solid #EBDEBC;
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
    border-radius: 5px 0 0 5px;

  }

  &.last {
    border-radius: 0 5px 5px 0;

  }

  &.addToBasket {
    transitions: all 1s;

    &.added {
      background-color: green;
    }
  }

  &.gtb {
    background-color: #EBDEBC;
    color: #666;
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
`;

const StyledBack = Styled.div`
display: grid;
width: 20%;
grid-template-columns: 1fr 1fr;
opacity: 0.8;
padding-bottom: 15px;

&:hover {
  opacity: 1;
}
`;

const StyledArrowCont = Styled.div`
align-self: center;
justify-self: center;
`;

const StyledTopArrow = Styled.div`
  height: 3px;
  width: 15px;
  background-color: #EBDEBC;
  transform-origin: 25%;
  transform: rotate(-35deg);
`;

const StyledBottomArrow = Styled.div`
height: 3px;
  width: 15px;
  background-color: #EBDEBC;
  transform-origin: 25%;
  transform: rotate(35deg);
`;

const StyledHeading = Styled.h2`
margin: 30px auto;
`;

const StyledIncludedSection = Styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 10px;
`;

const StyledIncludedImage = Styled.img`
  height: 80px;
  justify-self: center;
  align-self: center;
`;

const StyledInfo = Styled.div`
  align-self: center;
`;

const GiftBox = (props) => {
  const currentGiftBox = props.products.GiftBoxes.MothersDay;

  return (
    <StyledWrapper>
      <StyledBack onClick={props.backClick}>
        <StyledArrowCont>
          <StyledTopArrow></StyledTopArrow>
          <StyledBottomArrow></StyledBottomArrow>
        </StyledArrowCont>
        <p>Back</p>
      </StyledBack>
      <StyledHeading>{currentGiftBox.productName}</StyledHeading>
      <StyledImage src={require(`../../Assets/ProductImage/${currentGiftBox.image}`)} />
      <p>{currentGiftBox.productDesc.descHead}</p>
      <p>Includes:</p>
      {
        currentGiftBox.productDesc.descIncludes.map(item => {
          return (
            <StyledIncludedSection>
              <StyledIncludedImage src={require(`../../Assets/ProductImage/${item.image}`)} />
              <StyledInfo>
                <h3>{item.productName}</h3>
                <p>{item.productVariation}</p>
              </StyledInfo>
            </StyledIncludedSection>
          );
        })
      }
      {currentGiftBox.productAdditional}
      <StyledPricing>Price: £{(parseInt(props.products.pricing[0].giftBox) / 100).toFixed(2)}</StyledPricing>
      <StyledButton className="addToBasket" onClick={() => props.addToBasketClick(currentGiftBox)}>{props.buttonText}</StyledButton>
      <StyledButton onClick={props.goToBasketClick} className="gtb hidden">Go To Basket</StyledButton>
    </StyledWrapper>
  );
}

export default GiftBox;