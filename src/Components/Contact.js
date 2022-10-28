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

    // console.log(message);

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

        <div class="form-group">
      <h3>Contact Me</h3>
  <form target="_blank" action="https://formsubmit.co/brandymoore923@gmail.com" method="POST">
          <input 
          type="text" 
          value={name}
          onChange={handleInputChange}
          id="contact-name"
          name="name" class="form-control" placeholder="Full Name" required
          />
          <input 
          type="email" 
          value={email}
          onChange={handleInputChange}
          id="contact-email"
          name="email" class="form-control" placeholder="Email Address" required
          />
      <textarea 
      rows="10" 
      type="message"
      value={message}
      onChange={handleInputChange}
      id="contact-message"
      name="message" 
      class="form-control" 
      placeholder="Your Message" 
      required
      ></textarea>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>
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