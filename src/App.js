import React, { useState } from 'react';
import './App.css';

import TradingViewWidget from './TradingViewWidget';
import './TradingViewWidget.css';




function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleNavigation = (hash) => {
    window.location.hash = hash; 
    closeNavbar();
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="navbar-container">
            <div className="navbar-logo">
              <img src="koinx-logo.png" alt="Logo" />
            </div>
            <div className="menu-toggle" onClick={toggleNavbar}>
              <img src={isOpen ? '/ham-menu-close.png' : '/ham-menu.png'} alt="Menu" />
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
              <ul>
                <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavigation('/') }}>Crypto Taxes</a></li>
                <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavigation('/') }}>Free Tools</a></li>
                <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavigation('/') }}>Resource Center</a></li>
                <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavigation('/') }} className="btn btn--med btn--theme dynamicBgClr">Get started</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className={`header__sm-menu ${isOpen ? 'header__sm-menu--active' : ''}`}>
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link"><a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('#home') }}>Crypto Taxes</a></li>
              <li className="header__sm-menu-link"><a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('#about') }}>Free Tools</a></li>
              <li className="header__sm-menu-link"><a href="#education" onClick={(e) => { e.preventDefault(); handleNavigation('#education') }}>Resource Center</a></li>
              <li className="header__sm-menu-link"><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavigation('#projects') }} className="btn btn--med btn--theme dynamicBgClr" >Get started</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        
        <TradingViewWidget />

      </main>
      <footer>
       
      </footer>
    </div>
  );
}

export default App;
