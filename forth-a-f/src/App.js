import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import NavbarDark from './Components/Navbar/NavbarDark';
import ImageCarousel from './Components/ImageCarousel/ImageCarousel';




const handleBurgerClick = () => {
  const burgerLines = document.querySelectorAll('.burger-line');
  const smallNav = document.querySelector('.small-nav');
  smallNav.classList.toggle('open');
  burgerLines.forEach(line => {
    line.classList.toggle('selected');
  })
}

// const handleCarousel = () => {
//   const images = Array.from(document.querySelectorAll(".carousel-image"));
//   setTimeout(() => {
//     images[count].classList.remove('active');
//     count++;
//     images[count === images.length - 1 ? 0 : count].classList.add('active');
//     console.log(count);
//     handleCarousel();
//   }, 3000);
// }


function App() {
  useEffect(() => {
    let activeCount = 0;
    let lastCount = 3

    const handleCarousel = () => {
      const images = Array.from(document.querySelectorAll(".carousel-image"));
      setTimeout(() => {
        images[activeCount].classList.remove('active');
        images[lastCount].classList.remove('last');
        activeCount++;
        lastCount++;
        if (activeCount === images.length) {
          activeCount = 0;
        }
        if (lastCount === images.length) {
          lastCount = 0;
        }
        images[lastCount].classList.add('last');
        images[activeCount].classList.add('active');
        handleCarousel();
      }, 5000);
    }
    handleCarousel();
  });

  return (
    <div className="App">
      <HeaderComponent clicked={handleBurgerClick} />
      <hr />
      <NavbarDark categories={['Home', 'Scents', 'Gift Boxes']} />
      <ImageCarousel />
    </div>
  );
}

export default App;
