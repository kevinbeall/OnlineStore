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
import GiftBox from './Components/GiftBoxComponent/Giftbox'
import Product from './Components/Product/Product';
import Basket from './Components/Basket/Basket';
import UsefulLinks from './Components/UsefulLinks/UsefulLinks';



function App() {
  const [currentImage, setImage] = useState('BlackOpium.jpeg');
  const [selectedPrice, setPrice] = useState(Products.pricing[0].snapBar);
  const [currentBasket, setBasket] = useState([]);
  const [currentVariation, setVariation] = useState('');
  const [currentTotal, setTotal] = useState(0);
  const [stateProducts, setProducts] = useState(Products.productInfo);
  const buttonText = "Add to Basket";
  const [usefulTitle, setUsefulTitle] = useState([]);
  const [usefulContent, setUsefulContent] = useState([]);

  window.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      document.querySelector('.small-nav').classList.remove('open');
      document.querySelector('.searchBar').value = '';
      const burgerLines = document.querySelectorAll('.burger-line');
      burgerLines.forEach(line => {
        line.classList.toggle('selected');
      })
    }
  })

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
    const giftBox = document.querySelector('.giftboxContent');
    cleanup();
    giftBox.classList.add('hidden');
    basketButton.innerHTML = 'Add To Basket';
    goToBasket.classList.add('hidden');
    scent.classList.add('hidden');
    target.classList.remove('hidden');
    window.scrollTo(0, 0);
  };

  const handleProductGroupScentClick = (event) => {
    const home = document.querySelector('.homeContent');
    const target = document.querySelector('.scentsContent');
    const basket = document.querySelector('.basketContent');
    const product = document.querySelector('.productContent');
    const giftBox = document.querySelector('.giftboxContent');
    cleanup();
    giftBox.classList.add('hidden');
    product.classList.add('hidden');
    basket.classList.add('hidden');
    home.classList.add('hidden');
    target.classList.remove('hidden');
    window.scrollTo(0, 0);
  };

  const handleProductGroupGiftClick = (event) => {
    const pages = document.querySelectorAll('.page');
    const giftboxSection = document.querySelector('.giftboxContent');
    pages.forEach(page => {
      page.classList.add('hidden');
    })
    giftboxSection.classList.remove('hidden');
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    const home = document.querySelector('.homeContent');
    const scentContent = document.querySelector('.scentsContent');
    const basket = document.querySelector('.basketContent');
    const target = document.querySelector('.productContent');
    const useful = document.querySelector('.usefulLinksContent');
    const giftBox = document.querySelector('.giftboxContent');
    cleanup();
    giftBox.classList.add('hidden');
    useful.classList.add('hidden');
    target.classList.add('hidden');
    basket.classList.add('hidden');
    home.classList.remove('hidden');
    scentContent.classList.add('hidden');
    window.scrollTo(0, 0);
  }

  const prodToScents = () => {
    const scent = document.querySelector('.scentsContent');
    const target = document.querySelector('.productContent');
    cleanup();
    target.classList.add('hidden');
    scent.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  const giftToHome = () => {
    const home = document.querySelector('.homeContent');
    const target = document.querySelector('.giftboxContent');
    cleanup();
    target.classList.add('hidden');
    home.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  const continueShopping = () => {
    const home = document.querySelector('.homeContent');
    const pages = document.querySelectorAll('.page');
    cleanup();
    pages.forEach(page => {
      page.classList.add('hidden');
    })
    home.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
  const cleanup = () => {
    const varbtn = document.querySelectorAll('.variation-button');
    const basketbtn = document.querySelectorAll('.addToBasket');
    const priceEl = document.querySelectorAll('.price');
    const gtb = document.querySelectorAll('.gtb');
    setProducts(Products.productInfo);
    gtb.forEach(el => el.classList.add('hidden'));
    priceEl.forEach(el => el.classList.add('hidden'));
    basketbtn.forEach(btn => {
      btn.classList.add('hidden')
      btn.innerHTML = buttonText;
    });
    varbtn.forEach(btn => btn.classList.remove('selected'));
  }

  // Change all above functions to use this loop to show page needed.
  const handleBasketClick = () => {
    const basket = document.querySelector('.basketContent');
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      if (!page.classList.contains('hidden')) {
        page.classList.add('hidden');
      }
    })
    basket.classList.remove('hidden');
    window.scrollTo(0, 0);
  }

  const handleBurgerClick = () => {
    const burgerLines = document.querySelectorAll('.burger-line');
    const smallNav = document.querySelector('.small-nav');
    smallNav.classList.toggle('open');
    burgerLines.forEach(line => {
      line.classList.toggle('selected');
    })
  }

  const handleNavClick = (event) => {
    // add active to clikced item which then increases the opacity of that item.
    document.querySelector('.nav-list .active').classList.remove('active')
    event.target.classList.add('active');
    cleanup();
    //check the button clicked and call to function to render content needed
    if (event.currentTarget.innerHTML === 'HOME') {
      handleHomeClick();
    } else if (event.currentTarget.innerHTML === 'SCENTS') {
      handleProductGroupScentClick();
    } else if (event.currentTarget.innerHTML === 'GIFT BOXES') {
      handleProductGroupGiftClick();
    }
    const smallNav = document.querySelector('.small-nav');
    if (smallNav.classList.contains('open')) {
      handleBurgerClick();
    }
  }

  const handleVariation = (event) => {
    const buttons = Array.from(document.querySelectorAll('.variation-button'));
    const addToBasketBtn = document.querySelectorAll('.addToBasket');
    const priceEl = document.querySelectorAll('.price');

    priceEl.forEach(el => el.classList.remove('hidden'));
    addToBasketBtn.forEach(btn => {
      btn.classList.remove('hidden');
    })

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
    } else if (event.currentTarget.value === 'giftBox') {
      setPrice(Products.pricing[0].giftBox);
      setVariation('Gift Box')
    }
  }

  const addToBasket = (prod) => {
    const basketButton = document.querySelectorAll('.addToBasket');
    const goToBasket = document.querySelectorAll('.gtb');
    prod.id = Math.random().toString(36).replace('0.', '');
    console.log(prod);
    basketButton.forEach(button => {
      button.innerHTML = 'Added!';
      button.classList.add('added');
    })
    goToBasket.forEach(button => {
      button.classList.remove('hidden');
    })
    setTimeout(() => {
      basketButton.forEach(button => {
        button.classList.remove('added');
        button.innerHTML = 'Add Another?';
      })
    }, 1000)

    setBasket([...currentBasket, { ...prod, selectedPrice, currentVariation }]);
    // updating total price in basket
    setTotal(0);
    let total = parseInt(selectedPrice);
    currentBasket.forEach(item => {
      total = total + parseInt(item.selectedPrice);
    })
    setTotal(total);
  }

  const handleBasketRemove = (event, item) => {
    const toBeRemoved = currentBasket.find(item => event.currentTarget.parentElement.parentElement.classList.contains(item.id));
    const itemIndex = currentBasket.findIndex(item => item === toBeRemoved);
    const basketCopy = [...currentBasket];
    basketCopy.splice(itemIndex, 1);
    setBasket(basketCopy);
    // update basket total cost
    let total = 0;
    basketCopy.forEach(item => {
      total = total + parseInt(item.selectedPrice);
    })
    setTotal(total);
  }

  const handleSearch = (event) => {
    const searchValue = event.currentTarget.value;
    const regex = new RegExp((searchValue), 'gi')
    console.log(Products.productInfo.filter(item => item.productName.match(regex)))
    if (searchValue === null) {
      const home = document.querySelector('.homeContent');
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.add('hidden'));
      home.classList.remove('hidden');
    } else {
      const scents = document.querySelector('.scentsContent');
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.add('hidden'));
      scents.classList.remove('hidden');
      setProducts(Products.productInfo.filter(item => item.productName.match(regex)));
    }
  }

  const handleUsefulLinkClick = event => {
    const pages = document.querySelectorAll('.page');
    const usefulLinksSec = document.querySelector('.usefulLinksContent');
    pages.forEach(page => {
      page.classList.add('hidden');
    })
    usefulLinksSec.classList.remove('hidden');
    const selected = event.currentTarget.firstElementChild.innerHTML;
    Products.UsefulLinks.forEach(link => {
      if (selected === link.pageName) {
        setUsefulTitle(link.pageName)
        setUsefulContent(link.pageContent)
      }
    })
    window.scrollTo(0, 0);
  }

  const handleCheckout = () => {
    const checkout = document.querySelector('.checkoutDisplay');
    const complete = document.querySelector('.checkoutComplete');

    checkout.classList.add('hidden');
    complete.classList.remove('hidden');

    setTimeout(() => {
      checkout.classList.remove('hidden');
      complete.classList.add('hidden');
      setBasket([]);
      setTotal(0);
      handleHomeClick();
    }, 3000);
  }

  return (
    <div className="App">
      <HeaderComponent basketClick={handleBasketClick} clicked={handleBurgerClick} homeClick={handleHomeClick} />
      <NavbarDark searchChanged={handleSearch} click={handleNavClick} categories={['Home', 'Scents', 'Gift Boxes']} />
      <div className="page homeContent">
        <ImageCarousel />
        <ProductGroupWrapper handleScentClick={handleProductGroupScentClick} handleGiftClick={handleProductGroupGiftClick} />
        <SocialComponent />
      </div>
      <div className="page scentsContent hidden">
        <Scents homeClick={handleHomeClick} click={handleScentClick} scents={stateProducts} />
      </div>
      <div className="page giftboxContent hidden">
        <GiftBox addToBasketClick={addToBasket} products={Products} buttonText={buttonText} goToBasketClick={handleBasketClick} backClick={giftToHome} click={handleVariation} />
      </div>
      <div className="page productContent hidden">
        <Product buttonText={buttonText} price={selectedPrice} backClick={prodToScents} click={handleVariation} products={Products} image={currentImage} addToBasketClick={addToBasket} goToBasketClick={handleBasketClick} />
      </div>
      <div className="page basketContent hidden">
        <Basket total={currentTotal} basketContent={currentBasket} contshopclick={continueShopping} remove={handleBasketRemove} checkoutComplete={handleCheckout} />
      </div>
      <div className="page usefulLinksContent hidden">
        <UsefulLinks home={handleHomeClick} title={usefulTitle} content={usefulContent} />
      </div>
      <FooterComponent clicked={handleUsefulLinkClick} />
    </div>
  );
}

export default App;
