import React, { useState } from "react";
import { validateEmail } from "../../src/Components/utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "name") {
      setUserName(inputValue);
    }
    if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(message);

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    if (!message) {
      setErrorMessage(`Message is required.`);
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <div>
          <h3>Thank you for viewing my Portfolio!</h3>
          <p>Want to connect?</p>
          <address>
            <strong>Charlotte, NC </strong>
            <br />
            P: <a href="tel:111.111.1111">111.111.1111</a>
            <br />
            E: <a href="mailto://email@email.com">email@email.com</a>
          </address>
          <p>
            <strong>I'd love to connect!</strong>
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
          <form target="_blank" action="https://formsubmit.co/50b856b4356ea56f971217b3a081fecb" method="POST">
            <label for="contact-name">Name</label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Name"
            />

            <label for="contact-email">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Email"
            />

            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Message"
            />
            <button type="submit" onClick={handleFormSubmit}>
              Connect!
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>

      <p className="scrolldown">
          <a className="smoothscroll" href="#contact">
            <i className="icon-down-circle"></i>
          </a>
        </p>
    </section>
  );
}

export default Contact;