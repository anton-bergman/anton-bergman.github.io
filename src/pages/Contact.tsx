import React, { FormEvent, useState } from "react";
import "./Contact.scss";
import Header from "../layouts/Header";
import { BACKEND_URL } from "../utils/_variables";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const nameMaxLength: number = 75;
  const emailMaxLength: number = 254;
  const phoneMaxLength: number = 20;
  const messageMaxLength: number = 1000;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
    //console.log(formData);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, message: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //console.log("formData: " + formData);
    try {
      const response = await fetch(BACKEND_URL + "/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "",
          lastName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subjet: "",
          message: formData.message,
        }),
      });
      if (response.ok) {
        alert("Email sent!");
      }
    } catch (error) {
      console.error(error);
    }

    // Reset the form to empty
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <Header title="Contact me." position="top-page-header" />
      <form
        id="contact-me-form"
        action="/submit"
        method="POST"
        encType="text/plain"
        onSubmit={handleSubmit}
      >
        <div className="formContainer">
          <div className="formFieldContainer">
            <p className="titleField">Name</p>
            <input
              type={"text"}
              placeholder="Enter your name"
              className="inputField"
              id="name"
              maxLength={nameMaxLength}
              value={formData.name}
              onChange={handleInputChange}
              //pattern={inputType === "tel" ? phoneFieldRegEx : ""}
            />
          </div>
          <div className="formFieldContainer">
            <p className="titleField">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="inputField"
              id="email"
              maxLength={emailMaxLength}
              value={formData.email}
              onChange={handleInputChange}
              //pattern={inputType === "tel" ? phoneFieldRegEx : ""}
            />
          </div>
          <div className="formFieldContainer">
            <p className="titleField">Phone</p>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="inputField"
              id="phone"
              maxLength={phoneMaxLength}
              value={formData.phone}
              onChange={handleInputChange}
              //pattern={inputType === "tel" ? phoneFieldRegEx : ""}
            />
          </div>
          <div className="formFieldContainer">
            <p className="titleField">Message</p>
            <textarea
              className="inputField messageField"
              id="message"
              typeof="text"
              placeholder={"Enter your message"}
              maxLength={messageMaxLength}
              value={formData.message}
              onChange={handleTextareaChange}
              required
            />
          </div>

          <input className="submitButton" type="submit" value={"Submit"} />
          {/* <button className="submitButton" value={"Submit"}>
            Submit
          </button> */}
        </div>
      </form>
    </>
  );
}

export default Contact;
