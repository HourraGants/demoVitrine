import '../theme.css';
import content from "../content/content.json";

function Services() {
  return (
    <div id="services">
      <h3>
        Our Services
      </h3>
      <section id="servicescontent">
        {content.services.map((service, index) => (
          <div key={index} id="content">
            <img src={service.img}/>
            <h4>{service.title}</h4>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Services;