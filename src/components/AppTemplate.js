import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useImages from "../hooks/useImages";
import solar from "../Solar-panel-array-rooftop.jpg";
import email from "../email.png";
import NavBar from "./NavBar";

const Template = styled.div`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 1300px;
  margin: auto;

  @media only screen and (max-width: 1000px) {
    font-size: 10px;
  }

 
  img {
    width: 100%;
    height: 500px;
    margin: 0;
    transition: 0.5s ease-in-out;

  }
  h1 {
    color: white;
    margin: 0;
    padding: 1em;
    background-color: #e4e4e4;
    color: #000000;
    font-size: 24px;
    text-align: center;
    font-weight: normal;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  .footer {
    height: 100px;
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    direction: rtl;
    align-items: center;
    flex-direction: row;
    img {
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }
    a {
      display: flex;
      align-items: center;
      flex-direction: row;
    }
  }
`;

export default function AppTemplate({ children }) {
  const { image } = useImages();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

 

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <NavBar />
      <Template>
        {isDesktop ? (
          <div>
            <img
              src={image}
              alt="solar pictures"
            />
            <h1>המקום מספר אחת לתחום הסולרי</h1>
          </div>
        ) : (
          <div></div>
        )}
        {children}
        <div className="footer">
          <a href="mailto:erankopel@gmail.com">
            erankopel@gmail.com
            <img src={email} />
          </a>
          <div>Solar Sensei &#174;</div>
        </div>
      </Template>
    </div>
  );
}
