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
  width: 90%;
  justify-self: center;
  text-align: center;
  color: #EBDEBC;
  margin-bottom: 20px;
  padding: 30px 0;
  transition: all 1s;
  &.home {
    align-self: center;
    font-size: 1.4em;
  }
  &:hover {
    width: 93%;
  }
`;

const StyledImage = Styled.img`
  width: 90%;
`;

const StyledGiftBoxHead = Styled.h5`
  margin: 0;
`;

const Scents = (props) => {
  return (
    <StyledWrapper>
      <StyledItemCont className="home" onClick={props.homeClick}>Home</StyledItemCont>
      {
        props.scents.map((product, index) => {
          if (product.productVariation !== 'Gift Box') {
            return (
              <StyledItemCont onClick={props.click} key={product.productCode}>
                <StyledImage src={require(`../../Assets/ProductImage/${product.image}`)} alt={`${product.image}`} />
              </StyledItemCont>
            )
          }
          //  else {
          //   return (
          //     <StyledItemCont onClick={props.click} key={product.productCode}>
          //       <StyledGiftBoxHead>{product.productName}</StyledGiftBoxHead>
          //       <StyledImage src={require(`../../Assets/ProductImage/${product.image}`)} alt={`${product.image}`} />
          //     </StyledItemCont>
          //   )
          // }
        })
      }
    </StyledWrapper>
  );
}

export default Scents;