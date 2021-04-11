import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Email } from "../images/mail.svg";
import { ReactComponent as Phone } from "../images/phone.svg";

const FooterStyled = styled.div`
  display: flex;
  direction: rtl;
  background-color: #655596;
  font-family: "Alef", sans-serif;
  padding: 3em;

  h2 {
    margin-bottom: 1em;
    margin-top: 0;
    color: #ccc4e8;
  }

  form {
    display: flex;
    justify-content:space-between;

    input {
      font-family: "Alef", sans-serif;
      border-radius: 3px;
      margin-bottom: 0.5em;

      background-color: #ccc4e8;
      font-size: 1.4em;
      border: none;
      outline: none;
      padding: 0.2em 0.5em;
      transition: 0.2s ease-in-out;
      color: #443379;
      &:hover {
        background-color: #8a7db1;
      }
      &:focus {
        background-color: #8a7db1;
      }
    }
  }

  .inputs {
    display: flex;
    margin-left: 1em;
  }
  textarea {
    font-family: "Alef", sans-serif;
    border-radius: 3px;
    font-size: 1.4em;
    border: none;
    outline: none;
    padding: 0.2em 0.5em;
    height: 10em;
    transition: 0.2s ease-in-out;
    background-color: #ccc4e8;
    color: #443379;

    &:hover {
      background-color: #8a7db1;
    }
    &:focus {
      background-color: #8a7db1;
    }
  }
  button {
    font-family: "Alef", sans-serif;
    border-radius: 3px;
    height: 100%;
    font-size: 2em;
    border: none;
    outline: none;
    padding: 0.2em 0.5em;
    transition: 0.2s ease-in-out;
    background-color: #ccc4e8;
    color: #443379;

    &:hover {
      background-color: #8a7db1;
      cursor: pointer;
    }
  }

  .contact_info {
    margin-right: 1em;
    direction: ltr;
    font-size: 1.4em;
    margin-top: 0;
    a {
      text-decoration: none;
      color: #ccc4e8;
      margin-left: 0.2em;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  .fields{
    display:flex;
    flex-direction:row;
    width:70%;
    .message{
      width:70%;
    }
  }
`;

export default function Footer() {
  const [status, setStatus] = useState("שלח");
  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    setStatus("שולח...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <FooterStyled>
      <h2>צור קשר</h2>
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <div className="inputs">
            <input required placeholder="*שם מלא" type="text" id="name" />
            <input required placeholder="*אימייל" type="email" id="email" />
            <button type="submit">{status}</button>
          </div>
          <div className="message">
            <textarea id="message" required placeholder="*הודעה" />
          </div>
        </div>
        <div className="contact_info">
          <div>
            <Email width="1em" height="1em" fill="#ccc4e8" />
            <a href="mailto:erankopel@gmail.com">erankopel@gmail.com</a>
          </div>
          <div>
            <Phone width="1em" height="1em" fill="#ccc4e8" />
            <a href="tel:0523367997">0523367997</a>
          </div>
        </div>
      </form>
    </FooterStyled>
  );
}
