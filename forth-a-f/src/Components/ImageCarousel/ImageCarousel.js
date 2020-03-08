import React from 'react';
import Styled from 'styled-components';


const StyledImage = Styled.img`
width: 100%;
transfrom: translate(0, 100vw);
position: absolute;
transition: all 1s;

&.carousel-image {
  left: 100vw;
  opacity: 0;
}

&.active {
  left: 0;
  opacity: 1;
}

&.last {
  left: -100%;
  opacity: 0;
}
`

const ImageCarousel = (props) => {
  return (
    <div>
      <StyledImage className="carousel-image active carousel-1" src={require("../../Assets/CarouselImages/freshLinen.jpg")} />
      <StyledImage className="carousel-image carousel-2" src={require("../../Assets/CarouselImages/LadyMillionaire.jpg")} />
      <StyledImage className="carousel-image carousel-3" src={require("../../Assets/CarouselImages/MountainAir.jpg")} />
      <StyledImage className="carousel-image last carousel-4" src={require("../../Assets/CarouselImages/SummerBreeze.jpg")} />
    </div>
  );
  //1.get images and store in an array

  //2.display first image

  //3.on delay scroll to next image
}

export default ImageCarousel;