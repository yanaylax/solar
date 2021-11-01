import React, { useState, useEffect } from "react";
import styled from "styled-components";
import email from "../images/email.png";
import useImages from "../hooks/useImages";
import solar from "../images/solar_array2.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import sunpower from "../images/Sunpower_logo.svg";
import solaredge from "../images/SolarEdge_logo.svg";
import solarsensei from "../images/logo-inverted1.png";
import electra from "../images/electra.jpg";

import "../App.css";
import { ReactComponent as Menu } from "../images/menu.svg";
import { Link } from "react-router-dom";

import CrossfadeImage from "react-crossfade-image";

const Template = styled.div`
  font-size: 19px;
  font-family: "Alef", sans-serif;
  max-width: 1400px;
  margin: auto;
  background-color: white;
  color: #00558a;

  @media only screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 8px;
  }

  img {
    width: 100%;
    height: 35em;
    object-fit: cover;
    object-position: center;
    margin: 0;
  }
  h1 {
    color: #00558a;
    margin: 0;
    padding: 1em;
    background-color: #ffffff;
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

const MobileNav = styled.div`
  background-color: white;
  padding: 1em;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #00558a;
    font-weight: bold;
    font-size: 1em;
    display: flex;
    img {
      width: 6em;
    }
    &:hover {
      color: #96b9ce;
    }
  }
  .logo {
    direction: ltr;
    align-items: flex-end;
    h1 {
      margin: 0;
    }
    img {
      margin-right: 0.5em;
    }
  }
  .logo_img {
    font-size: 2.5em;
  }
`;

const MobileNavList = styled.div`
  .data_visible {
    font-size: 19px;
    display: flex;
    flex-direction: column;
    background-color: white;
    max-height: 500px;
    transition: max-height 0.5s;
    a {
      display: flex;
      direction: rtl;
      padding: 1em;
      font-weight: bold;
      text-decoration: none;
      color: #00558a;
      border-bottom: 0.1em solid #96b9ce;
      &:hover {
        background-color: #bee3f6;
      }
    }
    img {
      width: 7em;
    }
  }

  .data_hidden {
    max-height: 0px;
    visibility: hidden;
    a {
      max-height: 0px;
    }
    img {
      max-height: 0px;
    }
  }
`;

export default function AppTemplate({ children }) {
  const { image, imgId } = useImages();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 700);
  const [navOpen, setNavOpen] = useState(false);

  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <NavBar />
      ) : (
        <div>
          <MobileNav>
            <Menu
              onClick={() => setNavOpen(!navOpen)}
              fill="#00558a"
              width="2.5em"
            />

            <div className="logo">
              <Link to="/">
                <div className="logo">
                  <img className="logo_img" src={electra} />
                </div>
              </Link>
            </div>
          </MobileNav>
          <MobileNavList>
            <div className={navOpen ? "data_visible" : "data_hidden"}>
              <Link onClick={() => setNavOpen(false)} to="/">
                דף הבית
              </Link>
              <Link onClick={() => setNavOpen(false)} to="/sunpower">
                <img src={sunpower} alt="sunpower logo" />
              </Link>
              <Link onClick={() => setNavOpen(false)} to="/solaredge">
                <img src={solaredge} alt="solaredge logo" />
              </Link>
              <Link onClick={() => setNavOpen(false)} to="/construction">
                מערכות עגינה (קונסטרוקציה)
              </Link>
              <Link onClick={() => setNavOpen(false)} to="/english">
                English
              </Link>
            </div>
          </MobileNavList>
        </div>
      )}
      <Template>
        <div>
          <CrossfadeImage delay={1} src={image} />
          <h1>סולאר סנסאי - ציוד למערכות סולאריות</h1>
        </div>

        {children}
        <Footer />
      </Template>
    </div>
  );
}
