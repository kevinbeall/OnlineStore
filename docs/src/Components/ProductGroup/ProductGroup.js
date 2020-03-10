import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`
    width: 90%;
    height: 50vh;
    background-color: #666;
    margin: 50px auto 25px auto;
    cursor: pointer;
`;

const StyledProdHeading = Styled.h3`
    text-align: center;
    margin: 0;
    padding-top: 30px;
    color: #EBDEBC;
`;

const StyledSubHeading = Styled.h4`
    text-align: center;
    margin: 0;
    color: #EBDEBC;
`;

const StyledImage = Styled.img`
    height: 60%;
    display: block;
    margin: 10% auto;
`;

const ProductGroup = (props) => {
    return (
        <StyledWrapper onClick={props.click} className={props.title}>
            <StyledProdHeading>{props.title}</StyledProdHeading>
            <StyledSubHeading>View All</StyledSubHeading>
            <StyledImage src={require(`../../Assets/ProductGroup/${props.img}.JPG`)} alt={`Image of ${props.img}`} />
        </StyledWrapper>
    );
}

export default ProductGroup;