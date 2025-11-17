import '../theme.css';
import content from "../content/content.json";

function Footer() {
  return (
    <div id="footer">
      <div id="footercontent">
        <div>
          <h4 id="logo">CARPENTER</h4>
          <p>High-quality craftsmanship.</p>
          <p>Affordable pricing and adapted to your need.</p>
          <p>Genuine artisanal skill and customed for you.</p>
        </div>
        <div className="footer-separator"></div>
        <div id="footer-links">
          <h5>Links</h5>
          <ul>
            <li><a href="#home" className="footer-nav">Home</a></li>
            <li><a href="#services" className="footer-nav">Services</a></li>
            <li><a href="#process" className="footer-nav">Process</a></li>
            <li><a href="#works" className="footer-nav">Works</a></li>
            <li><a href="#contact" className="footer-nav">Contact</a></li>
          </ul>
        </div>
        <div className="footer-separator"></div>
        <div>
          <h5>Contact</h5>
          <p>{content.contact.phone}</p>
          <p>{content.contact.email}</p>
          <p>{content.contact.address}</p>
        </div>
      </div>
      <p>2025 Carpenter - All rights reserved</p>
    </div>
  )
}

export default Footer;
