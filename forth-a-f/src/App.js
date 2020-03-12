import React, { useEffect } from 'react';
import './App.css';
import Products from './Components/Products/Products';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import NavbarDark from './Components/Navbar/NavbarDark';
import ImageCarousel from './Components/ImageCarousel/ImageCarousel';
import ProductGroupWrapper from './Components/ProductGroup/ProductGroupWrapper';
import ProductGroup from './Components/ProductGroup/ProductGroup';
import SocialComponent from './Components/SocialComponent/SocialComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import Scents from './Components/Scents/Scents';



const handleBurgerClick = () => {
  const burgerLines = document.querySelectorAll('.burger-line');
  const smallNav = document.querySelector('.small-nav');
  smallNav.classList.toggle('open');
  burgerLines.forEach(line => {
    line.classList.toggle('selected');
  })
}

function App() {
  useEffect(() => {
    let activeCount = 0;
    let lastCount = 3

    const handleCarousel = () => {
      const images = Array.from(document.querySelectorAll(".carousel-image"));
      const text = Array.from(document.querySelectorAll('.carousel-text'));
      setTimeout(() => {
        text[activeCount].classList.remove('active');
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
        text[activeCount].classList.add('active');
        images[lastCount].classList.add('last');
        images[activeCount].classList.add('active');
        handleCarousel();
      }, 5000);
    }
    handleCarousel();
  });



  const handleScentClick = (event) => {
    console.log('clicked', event);
  };

  const handleProductGroupScentClick = (event) => {
    const home = document.querySelector('.homeContent');
    const target = document.querySelector('.scentsContent');
    home.classList.add('hidden');
    target.classList.remove('hidden');
    window.scrollTo(0, 0);
  };

  const handleProductGroupGiftClick = (event) => {
    console.log('click');
  };

  const handleHomeClick = () => {
    const home = document.querySelector('.homeContent');
    const scentContent = document.querySelector('.scentsContent');
    home.classList.remove('hidden');
    scentContent.classList.add('hidden');
    window.scrollTo(0, 0);
  }

  const handleNavClick = (event) => {
    // add active to clikced item which then increases the opacity of that item.
    document.querySelector('.nav-list .active').classList.remove('active')
    event.target.classList.add('active');
    //check the button clicked and call to function to render content needed
    if (event.currentTarget.innerHTML === 'HOME') {
      handleHomeClick();
    } else if (event.currentTarget.innerHTML === 'SCENTS') {
      handleProductGroupScentClick();
    }
    const smallNav = document.querySelector('.small-nav');
    if (smallNav.classList.contains('open')) {
      handleBurgerClick();
    }
  }

  return (
    <div className="App">
      <HeaderComponent clicked={handleBurgerClick} />
      <NavbarDark click={handleNavClick} categories={['Home', 'Scents', 'Gift Boxes']} />
      <div className="homeContent">
        <ImageCarousel />
        <ProductGroupWrapper handleScentClick={handleProductGroupScentClick} handleGiftClick={handleProductGroupGiftClick} />
        <SocialComponent />
      </div>
      <div className="scentsContent hidden">
        <Scents homeClick={handleHomeClick} click={handleScentClick} scents={Products} />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
