import React from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import NavbarDark from './Components/Navbar/NavbarDark';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <hr />
      <NavbarDark categories={['Home', 'Snap Bars', 'Individuals', 'Seasonal', 'Browse All']} />
    </div>
  );
}

export default App;
