import '../theme.css';
import content from "../content/content.json";

function Pricing() {
  return (
    <div id="pricing">
      <h3>
        Our prices
      </h3>
      <p id="pricing-description">Transparent pricing based on project size and materials</p>
      <section id="pricingcontent">
        {content.pricing.map((pricing, index) => (
          <div key={index} className={`content ${pricing.highlight ? "featured" : ""}`}>
            <h4>{pricing.plan}</h4>
            <h5>{pricing.price}</h5>
            <ul>
              {pricing.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
            <a href="#contact" className="button-pricing">Contact us</a>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Pricing;