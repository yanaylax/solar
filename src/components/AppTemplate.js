import React, { useState, useEffect } from "react";
import styled from "styled-components";
import email from "../images/email.png";
import useImages from "../hooks/useImages";
import solar from "../images/solar_array2.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../App.css";

 

import { SwitchTransition, CSSTransition } from "react-transition-group";
import CrossfadeImage from "./CrossfadeImage";

const Template = styled.div`
  font-size: 19px;
  font-family: 'Alef', sans-serif;
  max-width: 1300px;
  margin: auto;
  background-color:#B6CF6A;
  color:#637C16;

  @media only screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 6px;
  }

  img {
    width: 100%;
    height: 40em;
    margin: 0;
  }
  h1 {
    color: #8CA73A;
    margin: 0;
    padding: 1em;
    background-color: #DFF3A3;
    font-size: 1.8em;
    font-weight: normal;
    display: flex;
    justify-content: center;
  }
  div {
    display: flex;
    flex-direction: column;
  }


  
`;

export default function AppTemplate({ children }) {
  const { image, imgId } = useImages();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(false);

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
          <div className="main">
            <SwitchTransition mode={mode}>
              <CSSTransition
                key={state}
                addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
                }}
                classNames="fade"
              >
                <div className="button-container">
                  {/* <img src={image} alt="solar pictures" /> */}
                  <CrossfadeImage src={image}/>
                  <h1>המקום מספר אחת לתחום הסולרי</h1>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
      

        {children}
        <Footer />
      </Template>
    </div>
  );
}
