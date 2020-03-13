import React, { useEffect } from 'react';
import Styled from 'styled-components';

const BasketWrapper = Styled.div`
  background-color: #666;
  padding: 30px;
`;

const BasketHeading = Styled.h3`
  color: #EBDEBC;
  text-align: center;
  font-size: 1.6em;
`;

const StyledBasketItem = Styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 2px solid black;
`;

const StyledItemImage = Styled.img`
  height: 120px;
  display: block;
  margin: auto;
`;

const StyledItemInfo = Styled.div`
  color: #EBDEBC;
  padding: 10px;
  justify-self: left;
  align-self: center;
`;

const StyledItemTitle = Styled.h5`
  font-size: 1.1em;
  margin: 0;
  padding: 0;
`;

const StyledInfo = Styled.p`

`;

const StyledRemove = Styled.button`
  float: right;
  font-size: .9em;
`;

const StyledTotal = Styled.span`
  color: #EBDEBC;
  justify-self: center;
  align-self: center;
`;

const StyledCheckoutButton = Styled.button`
  color: #666;
  alignText: center;
  background-color: #EBDEBC;
  padding: 5px;
  border: 1px solid #EBDEBC;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`;

const CheckoutTotal = Styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-top: 2px dashed black;
  border-bottom: 2px dashed black;
  padding: 10px;
  margin-top: 10px;
`;

const ContinueShopping = Styled.button`
  color: #EBDEBC;
`;


const Basket = (props) => {
  return (
    <BasketWrapper>
      <ContinueShopping>Continue Shopping</ContinueShopping>
      <BasketHeading>Basket</BasketHeading>
      {
        props.basketContent.map(item => {
          return (
            <StyledBasketItem>
              <StyledItemImage src={require(`../../Assets/ProductImage/${item.image}`)} height='100px' />
              <StyledItemInfo>
                <StyledItemTitle>{item.productName}</StyledItemTitle>
                <StyledInfo>{item.currentVariation} - £{(item.selectedPrice / 100).toFixed(2)}</StyledInfo>
                <StyledRemove>remove</StyledRemove>
              </StyledItemInfo>
            </StyledBasketItem>
          );
        })
      }
      <CheckoutTotal>
        <StyledTotal>£{(props.total / 100).toFixed(2)}</StyledTotal>
        <StyledCheckoutButton>Checkout Now</StyledCheckoutButton>
      </CheckoutTotal>
    </BasketWrapper>
  );
}

export default Basket;

