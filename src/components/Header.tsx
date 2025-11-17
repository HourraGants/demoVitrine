import '../theme.css';

function Header() {
  return (
    <div id="header">
      <div id="logo">
        <p>CARPENTER</p>
      </div>
      <nav>
        <ul>
          <li><a href="#home" className="header-nav">Home</a></li>
          <li><a href="#services" className="header-nav">Services</a></li>
          <li><a href="#process" className="header-nav">Process</a></li>
          <li><a href="#works" className="header-nav">Works</a></li>
          <li><a href="#contact" className="header-nav">Contact</a></li>
          <li><img src="./src/assets/search.png" title="Searchbar" alt="search" /></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
