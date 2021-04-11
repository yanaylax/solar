import React, { useState, useEffect } from "react";
import styled from "styled-components";
import email from "../images/email.png";
import useImages from "../hooks/useImages";
import solar from "../images/solar_array2.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import sunpower from "../images/Sunpower_logo.svg";
import solaredge from "../images/SolarEdge_logo.svg";

import "../App.css";
import { ReactComponent as Menu } from "../images/menu.svg";
import { Link } from "react-router-dom";

import CrossfadeImage from "./CrossfadeImage";

const Template = styled.div`
  font-size: 19px;
  font-family: "Alef", sans-serif;
  max-width: 1400px;
  margin: auto;
  background-color: #b6cf6a;
  color: #637c16;

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
    margin: 0;
  }
  h1 {
    color: #8ca73a;
    margin: 0;
    padding: 1em;
    background-color: #dff3a3;
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
  background-color: #dff3a3;
  padding: 1em;
  direction: rtl;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #637c16;
    font-weight: 300;
    font-size: 1em;
    display: flex;
    img {
      width: 5em;
    }
    &:hover {
      color: #b6cf6a;
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
`;

const MobileNavList = styled.div`
  .data_visible {
    font-size: 19px;
    display: flex;
    flex-direction: column;
    background-color: #b6cf6a;
    max-height:500px;
    transition: max-height 0.5s ;
    a {
      display: flex;
      direction: rtl;
      padding: 1em;
      text-decoration: none;
      color: #637c16;
      border-bottom: 0.1em solid #637c16;
      &:hover {
        background-color: #dff3a3;
      }
    }
    img {
      width: 7em;
    }
  }

  .data_hidden {
    max-height: 0px;
    visibility: hidden;
    a{
      max-height:0px;
    }
    img{
      max-height:0px;
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
              fill="#637c16"
              width="2.5em"
            />

            <div className="logo">
              <Link to="/">
                <div className="logo">
                  <h1>Solar Sensei</h1>
                  <div>
                    {" "}
                    <img src={sunpower} alt="sunpower logo" />
                    official distributer
                  </div>
                </div>
              </Link>
            </div>
          </MobileNav>
          <MobileNavList>
            <div className={navOpen ? "data_visible" : "data_hidden"}>
              <Link to="/">דף הבית</Link>
              <Link to="/sunpower">
                <img src={sunpower} alt="sunpower logo" />
              </Link>
              <Link to="/solaredge">
                <img src={solaredge} alt="solaredge logo" />
              </Link>
              <Link to="/construction">מערכות עגינה (קונסטרוקציה)</Link>
              <Link to="/english">English</Link>
            </div>
          </MobileNavList>
        </div>
      )}
      <Template>
        <div>
          <CrossfadeImage src={image} />
          <h1>סולאר סנסאי - ציוד למערכות סולאריות</h1>
        </div>

        {children}
        <Footer />
      </Template>
    </div>
  );
}
