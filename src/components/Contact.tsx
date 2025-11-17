import '../theme.css';
import content from "../content/content.json";
import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mblqjpry"; // ← colle ton URL

function Contact() {

  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // honeypot
    if (data.get("company")) return;

    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.status === 200) {
        setStatus("ok");
        form.reset();   // ✅ réactive le bouton
        return;
      }

      // si ce n'est pas un 200 → erreur
      setStatus("error");

    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div>
      <div id="contactform">
        <h3>
          Get in Touch
        </h3>
        <p id="contact-description">Contact us with this form <br />and find our details below with our localisation !</p>
        <form onSubmit={handleSubmit}>
          <div id="name-email">
            <label>
              <input type="text" name="name" placeholder="Name" required />
            </label>

            <label>
              <input type="email" name="email" placeholder="Email" required />
            </label>
          </div>

          <div>
          <select id="topic" name="topic" required>
            <option value="">Select a project type</option>
            <optgroup label="Interior">
              <option value="closets">Closets / Dressing</option>
              <option value="shelving">Shelving / Bookshelves</option>
              <option value="furniture">Custom Furniture</option>
            </optgroup>
            <optgroup label="Kitchen">
              <option value="kitchen-design">Custom Kitchen Design</option>
              <option value="kitchen-install">Kitchen Installation</option>
            </optgroup>
            <optgroup label="Exterior">
              <option value="doors">Doors & Windows</option>
              <option value="shutters">Wooden shutters</option>
              <option value="pergola">Pergola / Exterior woodwork</option>
            </optgroup>
            <optgroup label="Other">
              <option value="restoration">Furniture Restoration</option>
              <option value="quote">General Quote Request</option>
              <option value="appointment">Book a Visit</option>
              <option value="other">Other</option>
            </optgroup>
          </select>
          </div>

          <div>
            <label>
              <textarea name="message" placeholder="Message" required></textarea>
            </label>
          </div>

          <div>
            <button type="submit" disabled={status==="loading"} id="button-form">
            {status === "loading" ? "Sending…" : "Send"}
            </button>
          </div>

          {status === "ok" && <p className="success">Thanks! We’ll get back to you shortly.</p>}
          {status === "error" && <p className="error">Oops, please try again.</p>}
        </form>
      </div>
      <div id="contactcontent">
        <div>
          <h4>Contact Details</h4>
          <p>{content.contact.phone}</p>
          <p>{content.contact.email}</p>
          <p>{content.contact.zones}</p>
          <p>{content.contact.hours}</p>
          <p>{content.contact.address}</p>
        </div>
        <div>
          <a
            href="https://www.google.com/maps?q=49.1813309627645, -0.37275048079703954" 
            target="_blank"
            rel="noopener noreferrer"
            className="map-card"
          >
            <img src="./src/assets/map-placeholder.png" alt="Voir notre atelier sur Google Maps" />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Contact;