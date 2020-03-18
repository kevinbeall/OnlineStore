import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
    width: 250px;
    height: 300px;
    background-color: #666;
    margin: 50px auto 25px auto;
    cursor: pointer;
    transition: all 0.5s;

    @media(min-width: 700px){
        height: 500px;
        width: 500px;
      }
`;

const StyledProdHeading = Styled.h3`
    text-align: center;
    margin: 0;
    padding-top: 30px;
    color: #EBDEBC;
    @media(min-width: 700px){
        font-size: 1.8em;
      }
`;

const StyledSubHeading = Styled.h4`
    text-align: center;
    margin: 0;
    color: #EBDEBC;
    @media(min-width: 700px){
        font-size: 1.4em;
        padding-top: 20px;
      }

`;

const StyledImage = Styled.img`
    height: 150px;
    display: block;
    margin: 10% auto;
    @media(min-width: 700px){
        height: 300px;
    }
`;

const ProductGroup = (props) => {
    return (
        <StyledWrapper onClick={props.click} className={props.title}>
            <StyledProdHeading>{props.title}</StyledProdHeading>
            <StyledSubHeading>View All</StyledSubHeading>
            <StyledImage src={require(`../../Assets/ProductGroup/${props.img}.jpg`)} alt={`Image of ${props.img}`} />
        </StyledWrapper>
    );
}

export default ProductGroup;