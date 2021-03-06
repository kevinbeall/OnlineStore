import React from 'react';
import Styled from 'styled-components';

const BasketWrapper = Styled.div`
  background-color: #666;
  padding: 30px;
  min-height: 220px;
`;

const BasketHeading = Styled.h3`
  color: #EBDEBC;
  text-align: center;
  font-size: 1.6em;

  @media(min-width: 700px){
    font-size: 2em;
  }
`;

const StyledBasketItem = Styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 2px solid black;

  @media(min-width: 700px){
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 1000px){
    font-size: 1.7em;
  }
`;

const StyledItemImage = Styled.img`
  height: 120px;
  display: block;
  margin: auto;

  @media(min-width: 1000px){
    height: 200px;
  }
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
  background-color: transparent;
  border: none;

  &:focus{
    outline: none;
  }
`;

const StyledTotal = Styled.span`
  color: #EBDEBC;
  justify-self: center;
  align-self: center;

  @media(min-width: 700px){
    font-size: 2em;
  }
`;

const StyledCheckoutButton = Styled.button`
  color: #666;
  alignText: center;
  background-color: #EBDEBC;
  padding: 5px;
  border: 1px solid #EBDEBC;
  font-size: 1em;
  max-width: 400px;

  &:focus {
    outline: none;
  }

  @media(min-width: 700px){
    font-size: 1.4em;
  }

  @media(min-width: 1200px){
    font-size: 1.8em;
  }
`;

const CheckoutTotal = Styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-top: 2px dashed black;
  border-bottom: 2px dashed black;
  padding: 10px;
  margin-top: 10px;
  @media(min-width: 700px){
    grid-template-columns: 1fr 1fr;
  }
`;

const ContinueShopping = Styled.button`
  color: #EBDEBC;
  border: 3px solid #EBDEBC;
  padding: 10px;
  background-color: transparent;
  font-size: 0.8em;

  &:hover {
    background-color: #EBDEBC;
    color: #666;
  }

  @media(min-width: 1200px){
    font-size: 1em;
    padding: 15px;
  }
`;

const StyledTotalTitle = Styled.h3`
  color: #EBDEBC;

  @media(min-width: 700px){
    font-size: 2em;
    padding-left: 50px;
  }
`;

const StyledCheckoutComplete = Styled.p`
  color: #EBDEBC;
  text-align: center;
  font-size: 3em;
  padding: 200px 0;
`;

const StyledBasket = Styled.div`
  &.hidden {
    display: none;
  }
`;


const Basket = (props) => {
  return (
    <BasketWrapper>
      <StyledBasket className="checkoutDisplay">
        <ContinueShopping onClick={props.contshopclick}>Continue Shopping</ContinueShopping>
        <BasketHeading>Basket</BasketHeading>
        {props.basketContent === undefined ?
          <p>empty</p>
          :
          props.basketContent.map(item => {
            return (
              <StyledBasketItem className={item.id}>
                <StyledItemImage src={require(`../../Assets/ProductImage/${item.image}`)} height='100px' />
                <StyledItemInfo>
                  <StyledItemTitle>{item.productName}</StyledItemTitle>
                  <StyledInfo>{item.currentVariation} - £{(item.selectedPrice / 100).toFixed(2)}</StyledInfo>
                  <StyledRemove onClick={props.remove}>remove</StyledRemove>
                </StyledItemInfo>
              </StyledBasketItem>
            );
          })
        }
        <StyledTotalTitle>Total</StyledTotalTitle>
        <CheckoutTotal>
          <StyledTotal>£{(props.total / 100).toFixed(2)}</StyledTotal>
          <StyledCheckoutButton onClick={props.checkoutComplete}>Checkout Now</StyledCheckoutButton>
        </CheckoutTotal>
      </StyledBasket>
      <StyledBasket className="checkoutComplete hidden">
        <StyledCheckoutComplete>Thank you for your order.</StyledCheckoutComplete>
      </StyledBasket>
    </BasketWrapper>
  );
}

export default Basket;

