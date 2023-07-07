import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oair297",
        "template_0uy1icb",
        form.current,
        "wgpM-qo96iuagi2g3"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer" id="connect">
      <div className="contactWrapper">
        <h1 className="connectTitle">Connect.</h1>
        <p>
          Fill out the form or email me directly at{" "}
          <strong>jackmitchellportfolio@gmail.com</strong>
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <button className="contactButton" type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
