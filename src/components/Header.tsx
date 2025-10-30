import '../theme.css';

function Header() {
  return (
    <div id="header">
      <div id="logo">
        <p>CARPENTER</p>
      </div>
      <div>
        <ul>
          <li><a href="#home" className="nav">Home</a></li>
          <li><a href="#services" className="nav">Services</a></li>
          <li><a href="#process" className="nav">Process</a></li>
          <li><a href="#works" className="nav">Works</a></li>
          <li><a href="#contact" className="nav">Contact</a></li>
          <li><img src="./src/assets/search.png" title="Searchbar" alt="search" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
