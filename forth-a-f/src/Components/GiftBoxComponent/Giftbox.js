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
  max-width: 600px;
`;

const StyledButtonGroup = Styled.div`
  margin: 20px auto;
`;

const StyledButton = Styled.button`
  font-size: 1em;
  border: 3px solid #EBDEBC;
  background-color: transparent;
  padding: 10px;
  color: #EBDEBC;
  font-weight: bold;
  transition: all 0.5s;

  @media(min-width: 700px){
    font-size: 1.4em;
  }


  &.selected {
    background-color: #EBDEBC;
    color: #666;

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

const StyledBack = Styled.button`
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

const StyledHeading = Styled.h2`
margin: 30px auto;
`;

const StyledIncludedSection = Styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 10px;

  @media(min-width: 1200px){
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledIncludedImage = Styled.img`
  height: 80px;
  justify-self: center;
  align-self: center;
  @media(min-width: 700px){
    height: 130px;
  }
`;

const StyledInfo = Styled.div`
  align-self: center;
  @media(min-width: 700px){
    font-size: 1.4em;
  }
`;

const StyledProdHead = Styled.h3`
  margin: 20px 0 0 0;
  padding: 0;
  justify-self: center;
  @media(min-width: 700px){
    font-size: 1.4em;
  }
`;

const StyledDesc = Styled.p`
  margin: 30px auto;
  @media(min-width: 700px){
    font-size: 1.5em;
    text-align: center;
  }
`;

const StyledInc = Styled.p`
text-align: left;
padding: 30px;
@media(min-width: 700px){
    font-size: 1.4em;
  }
`;

const StyledAdd = Styled.p`
  @media(min-width: 700px){
    font-size: 1.5em;
    text-align: center;
  }
`;

const GiftBox = (props) => {
  const currentGiftBox = props.products.GiftBoxes.MothersDay;

  // useEffect(() => {
  //   return function cleanup() {
  //     const addToBasketButton = document.querySelectorAll('.addToBasket');
  //     addToBasketButton.forEach(btn => {
  //       btn.classList.add('hidden');
  //     })
  //   }
  // })

  return (
    <StyledWrapper>
      <StyledBack onClick={props.backClick}>Back</StyledBack>
      <StyledHeading>{currentGiftBox.productName}</StyledHeading>
      <StyledImage src={require(`../../Assets/ProductImage/${currentGiftBox.image}`)} />
      <StyledDesc>{currentGiftBox.productDesc.descHead}</StyledDesc>
      <StyledInc>Includes:</StyledInc>
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
      <StyledAdd>{currentGiftBox.productAdditional}</StyledAdd>
      <StyledProdHead>Select Product</StyledProdHead>
      <StyledButtonGroup>
        <StyledButton className="variation-button" value="giftBox" onClick={props.click}>GiftBox</StyledButton>
      </StyledButtonGroup>
      <StyledPricing className="price hidden">Price: £{(parseInt(props.products.pricing[0].giftBox) / 100).toFixed(2)}</StyledPricing>
      <StyledButton className="addToBasket hidden" onClick={() => props.addToBasketClick(currentGiftBox)}>{props.buttonText}</StyledButton>
      <StyledButton onClick={props.goToBasketClick} className="gtb hidden">Go To Basket</StyledButton>
    </StyledWrapper>
  );
}

export default GiftBox;