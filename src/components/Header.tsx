import '../theme.css';

function Header() {
  return (
    <div id="header">
      <div>
        <div>
          <img className="logo" src="./src/assets/scie.png" alt="Site's logo" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
