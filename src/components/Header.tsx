import { useState } from 'react';
import '../theme.css';
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header id="header">
      <div id="logo">
        <p>CARPENTER</p>
      </div>
      <button
        className="header-burger"
        aria-expanded={isOpen}
        aria-label="Menu"
        onClick={handleToggle}
      >
        {isOpen ? <X color="white" /> : <Menu color="white" />}
      </button>
      <nav className={`header-nav ${isOpen ? "nav-open" : ""}`}>
        <ul>
          <li><a href="#home" className="header-nav-li">Home</a></li>
          <li><a href="#services" className="header-nav-li">Services</a></li>
          <li><a href="#process" className="header-nav-li">Process</a></li>
          <li><a href="#works" className="header-nav-li">Works</a></li>
          <li><a href="#contact" className="header-nav-li">Contact</a></li>
          <li><img src="./src/assets/search.png" title="Searchbar" alt="search" /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
