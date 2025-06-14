import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h1 className="section-title">Contact</h1>
      <hr className="line" />
      <p className="contact-subtext">
        Let’s get in touch and talk about your next project.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message"  required></textarea>
        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
  );
};
