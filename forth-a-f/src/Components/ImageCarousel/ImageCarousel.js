import React from 'react';
import Styled from 'styled-components';


const StyledWrapper = Styled.div`
  position: relative;
  max-width: 100%;
  height: 300px;

  @media(min-width: 700px){
    height: 500px;
  }

  @media(min-width: 1200px){
    height: 700px;
  }
`

const StyledImage = Styled.img`
width: 100%;
height: 300px;
transfrom: translate(0, 100vw);
transition: all 1s;
position: absolute;
object-fit: cover;

@media(min-width: 700px){
  height: 500px;
}

@media(min-width: 1200px){
  height: 700px;
}

&.carousel-image {
  opacity: 0;
}

&.active {
  opacity: 1;
}
`

const StyledDesc = Styled.h4`
  position: absolute;
  top: 160px;
  background-color: #EBDEBC;
  left: 90px;
  padding: 15px 30px;
  opacity: 0;
  z-index: 100;
  transition: all 1s;
  &.active {
    left: 30px;
    opacity: 0.8;
  }

  @media(min-width: 700px){
    top: 330px;
  }

  @media(min-width: 1200px){
    top: 550px;
    font-size: 1.5em;
  }
`

const ImageCarousel = (props) => {
  return (
    <StyledWrapper>
      <StyledDesc className='carousel-text active'>Snap Bars</StyledDesc>
      <StyledImage className="carousel-image active carousel-1" src={require("../../Assets/CarouselImages/DSC00756.JPG")} />
      <StyledDesc className='carousel-text'>Individuals</StyledDesc>
      <StyledImage className="carousel-image carousel-2" src={require("../../Assets/CarouselImages/DSC00764.JPG")} />
      <StyledDesc className='carousel-text'>Select your Fragrance!</StyledDesc>
      <StyledImage className="carousel-image carousel-3" src={require("../../Assets/CarouselImages/DSC00767.JPG")} />
      <StyledDesc className='carousel-text'>£15 Mothers Day Giftbox</StyledDesc>
      <StyledImage className="carousel-image last carousel-4" src={require("../../Assets/CarouselImages/MothersDayBox.jpg")} />
    </StyledWrapper>
  );
  //1.get images and store in an array

  //2.display first image

  //3.on delay scroll to next image
}

export default ImageCarousel;