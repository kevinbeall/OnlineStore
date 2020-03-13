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

`;

const StyledCheckoutButton = Styled.button`

`;


const Basket = (props) => {
  return (
    <BasketWrapper>
      <BasketHeading>Basket</BasketHeading>
      {
        props.basketContent.map(item => {
          return (
            <StyledBasketItem>
              <StyledItemImage src={require(`../../Assets/ProductImage/${item.image}`)} height='100px' />
              <StyledItemInfo>
                <StyledItemTitle>{item.productName}</StyledItemTitle>
                <StyledInfo>{item.currentVariation} - £{item.selectedPrice}</StyledInfo>
                <StyledRemove>remove</StyledRemove>
              </StyledItemInfo>
            </StyledBasketItem>
          );
        })
      }
      <StyledTotal>{props.total}</StyledTotal>
      <StyledCheckoutButton />
    </BasketWrapper>
  );
}

export default Basket;

