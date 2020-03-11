import React from 'react';
import ProductGroup from './ProductGroup';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
  @media(min-width: 1200px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  }
`;

const ProductGroupWrapper = props => {
    return (
        <StyledWrapper>
            <ProductGroup click={props.handleScentClick} title='SCENTS' img='snapBarProd' />
            <ProductGroup click={props.handleGiftClick} title='GIFT BOXES' img='MothersDayBox' />
        </StyledWrapper>
    );
}

export default ProductGroupWrapper;