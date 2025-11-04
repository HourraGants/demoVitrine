import '../theme.css';
import content from "../content/content.json";

function Works() {
  return (
    <div id="works">
      <h3>
        Our Works
      </h3>
      <section id="workscontent">
        {content.works.map((work, index) => (
          <div key={index} id="content">
            <img src={work.img}/>
            <h4>{work.alt}</h4>
            <p>{work.city}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Works;