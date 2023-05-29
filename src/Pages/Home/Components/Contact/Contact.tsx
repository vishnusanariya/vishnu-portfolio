import React from "react";
import './Contact.style.css'
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact-title">
          <i className="fa fa-envelope" aria-hidden="true"></i> Email
        </div>
        <div className="contact-details"><a href="mailto:vishnusanariya98@gmail.com" target="_blank">vishnusanariya98@gmail.com</a></div>
      </div>
      <div className="contact">
        <div className="contact-title">
          <i className="fa-brands fa-linkedin"></i> Linkedin
        </div>
        <div className="contact-details"><a href="https://www.linkedin.com/in/vishnusanariya/" target="_blank">https://www.linkedin.com/in/vishnusanariya</a></div>
      </div>
    </div>
  );
};

export default Contact;
