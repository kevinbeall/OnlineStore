import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './Components/Products/Products';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import NavbarDark from './Components/Navbar/NavbarDark';
import ImageCarousel from './Components/ImageCarousel/ImageCarousel';
import ProductGroupWrapper from './Components/ProductGroup/ProductGroupWrapper';
import SocialComponent from './Components/SocialComponent/SocialComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import Scents from './Components/Scents/Scents';
import Product from './Components/Product/Product';
import Basket from './Components/Basket/Basket';


const handleBurgerClick = () => {
  const burgerLines = document.querySelectorAll('.burger-line');
  const smallNav = document.querySelector('.small-nav');
  smallNav.classList.toggle('open');
  burgerLines.forEach(line => {
    line.classList.toggle('selected');
  })
}

function App() {
  const [currentImage, setImage] = useState('BlackOpium.jpg');
  const [selectedPrice, setPrice] = useState(Products.pricing[0].snapBar);
  const [currentBasket, setBasket] = useState([]);
  const [currentVariation, setVariation] = useState('Snap Bar');
  const [currentTotal, setTotal] = useState(0);

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
    setImage(event.currentTarget.firstElementChild.alt);
    const scent = document.querySelector('.scentsContent');
    const target = document.querySelector('.productContent');
    const basketButton = document.querySelector('.addToBasket');
    const goToBasket = document.querySelector('.gtb');
    basketButton.innerHTML = 'Add To Basket';
    goToBasket.classList.add('hidden');
    scent.classList.add('hidden');
    target.classList.remove('hidden');
    window.scrollTo(0, 0);
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

  const prodToScents = () => {
    const scent = document.querySelector('.scentsContent');
    const target = document.querySelector('.productContent');
    target.classList.add('hidden');
    scent.classList.remove('hidden');
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

  const handleVariation = (event) => {
    const buttons = Array.from(document.querySelectorAll('.variation-button'));

    buttons.forEach(button => {
      button.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    if (event.currentTarget.value === 'snapBar') {
      setPrice(Products.pricing[0].snapBar);
      setVariation('Snap Bar');
    } else if (event.currentTarget.value === 'individual') {
      setPrice(Products.pricing[0].individual);
      setVariation('Individual');
    } else if (event.currentTarget.value === 'sample') {
      setPrice(Products.pricing[0].sample);
      setVariation('Sample');
    }
  }

  const addToBasket = (prod) => {
    const basketButton = document.querySelector('.addToBasket');
    const goToBasket = document.querySelector('.gtb');
    basketButton.innerHTML = 'Added!';
    basketButton.classList.add('added');
    goToBasket.classList.remove('hidden');
    setTimeout(() => {
      basketButton.classList.remove('added');
      basketButton.innerHTML = 'Add Another?';
    }, 1000)

    setBasket([...currentBasket, { ...prod, selectedPrice, currentVariation }]);
    calcTotal();
  }
  // calc total needs to be fixed as not calculating first addition
  const calcTotal = () => {
    let total = 0;
    if (currentTotal === 0) {
      setTotal(currentBasket.selectedPrice);
    }
    console.log(currentTotal);
    currentBasket.forEach(item => {
      total = currentTotal + parseInt(item.selectedPrice)
    })
    setTotal(total += currentTotal);
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
      <div className="productContent hidden">
        <Product buttonText={'Add To Basket'} price={selectedPrice} backClick={prodToScents} click={handleVariation} products={Products} image={currentImage} basketClick={addToBasket} />
      </div>
      <div className="basketContent">
        <Basket total={currentTotal} basketContent={currentBasket} />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
