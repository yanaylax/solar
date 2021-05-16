import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Email } from "../images/mail.svg";
import { ReactComponent as Phone } from "../images/phone.svg";
import eran from "../images/eran.jpg";

const FooterStyled = styled.div`
  display: flex;
  direction: rtl;
  background-color: #655596;
  font-family: "Alef", sans-serif;
  padding: 1em;
  font-size: 19px;
  @media only screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 7px;
  }

  h2 {
    color: #ccc4e8;
    text-align:center;
    font-size:1.7em;
  }

  form {
    display: flex;

    input {
      font-family: "Alef", sans-serif;
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
    font-size: 1.4em;
    border: none;
    outline: none;
    padding: 0.2em 0.5em;
    height: 10em;
    transition: 0.2s ease-in-out;
    background-color: #ccc4e8;
    color: #443379;
    resize: none;
    &:hover {
      background-color: #8a7db1;
    }
    &:focus {
      background-color: #8a7db1;
    }
  }
  button {
    font-family: "Alef", sans-serif;
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
    font-size: 1.2em;
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
  .fields {
    display: flex;
    flex-direction: row;
    width: 100%;
    .message {
      width: 100%;
    }
  }
  .eran_kopel {
    display: flex;
    flex-direction: row;
    padding-top:1em;
    margin-top:1em;
    border-top:0.3em solid #8a7db1;
    color: #ccc4e8;
    img {
      width: 15em;
      height: 15em;
      border: 0.2em solid #ccc4e8;
      border-radius:10px;
    }
    h3{
      font-size:1.4em;
    }
    .inner_content{
      padding:1em;
      padding-left:2em;
      padding-right:2em;
      display:flex;
      justify-content:space-between;
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
    <div>
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
          {/* <div className="contact_info">
            <div>
              <Email width="1em" height="1em" fill="#ccc4e8" />
              <a href="mailto:erankopel@gmail.com">erankopel@gmail.com</a>
            </div>
            <div>
              <Phone width="1em" height="1em" fill="#ccc4e8" />
              <a href="tel:0523367997">052-3367997</a>
            </div>
          </div> */}
        </form>
        <div className="eran_kopel">
        <img src={eran} />

          <div className="inner_content">
            <h3>סולאר סנסאי (*) מנוהלת על ידי ערן קופל</h3>
            <div className="contact_info">
            <div>
              <a href="mailto:erankopel@gmail.com">erankopel@gmail.com</a>
              <Email width="1em" height="1em" fill="#ccc4e8" />
            </div>
            <div>
              <a href="tel:0523367997">052-3367997</a>
              <Phone width="1em" height="1em" fill="#ccc4e8" />
            </div>
          </div>
            <p>
              (*) סנסאי משמעו מורה, מדריך ביפנית. סן (sen 先) = לפני, הקודם,
              בראש. סאי (sei 生) = לידה, חיים, מקור. סנסאי הוא "זה שנולד קודם"
              כאשר המילה "נולד" אינה מתייחסת לגיל כרונולוגי אלא לוותק
            </p>
          </div>
          
        </div>
      </FooterStyled>
    </div>
  );
}
