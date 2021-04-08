import React from "react";
import styled from "styled-components";
import email from "../images/email.png";

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  direction: rtl;
  background-color: #8a7db1;
  font-family: Arial, Helvetica, sans-serif;
  padding:3em;

  h2{
    margin:0.4em;
    margin-bottom:2em;
    color:#ccc4e8;
  }
 
  form {
    display: flex;
    flex-direction: column;
    
    input {
      margin: 0.4em;
      background-color:#ccc4e8;
      width:100%;
      font-size: 1.2em;
      border: none;
      outline: none;
      padding: 0.2em 0.5em;
      transition: 0.1s ease-in-out;
      color:#8a7db1;
      &:hover {
        outline: 2px solid #b8b0d3;
      }
      &:focus {
        outline: 2px solid #b8b0d3;
      }
    }
  }
 
  .inputs {
    display: flex;
    flex-direction: row;
    margin: 0;
    justify-content:space-between;
  }
  textarea {
    margin:0.4em;
    font-size: 1.2em;
    border: none;
    outline: none;
    padding: 0.3em 0.5em;
    height: 10em;
    transition: 0.1s ease-in-out;
    background-color:#ccc4e8;


    &:hover {
      outline: 2px solid #b8b0d3;
    }
    &:focus {
      outline: 2px solid #b8b0d3;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
        <h2>צור קשר</h2>
        <form>
          <div className="inputs">
            <input required placeholder="*שם מלא" type="text" />
            <input placeholder="*טלפון" type="text" />
            <input placeholder="*אימייל" type="text" />
          </div>
          <textarea />
        </form>
    </FooterStyled>
  );
}
