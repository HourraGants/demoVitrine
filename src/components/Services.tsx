import '../theme.css';
import content from "../content/content.json";

function Services() {
  return (
    <div id="services">
      <h3>
        Services
      </h3>
      <section id="servicescontent">
        {content.services.map((service, index) => (
          <div key={index}>
            <img src={service.img}/>
            <h4>{service.title}</h4>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Services;