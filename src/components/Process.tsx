import '../theme.css';
import { ArrowRight } from "lucide-react";
import content from "../content/content.json";

function Process() {
  return (
    <div id="process">
      <h3>
        Our Process
      </h3>
      <section id="processcontent">
        {content.process.map((process, index) => (
          <div key={index} className="process-box">
            <div className="process-step">
              <img src={process.img}/>
              <h4>{process.title}</h4>
              <p>{process.desc}</p>
            </div>
            {index !== content.process.length - 1 && (
              <ArrowRight className="arrow" />
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Process;