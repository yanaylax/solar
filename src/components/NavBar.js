import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sunpower from "../images/Sunpower_logo.svg";
import solaredge from "../images/SolarEdge_logo.svg";

const Nav = styled.div`
  direction: rtl;
  font-family: "Alef", sans-serif;
  max-width: 1400px;
  display: flex;

  margin: auto;
  background-color: #dff3a3;
  font-size: 20px;

  justify-content: space-between;

  @media only screen and (max-width: 1346px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 1014px) {
    font-size: 10px;
  }

  h1 {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  a {
    text-decoration: none;
    color: #637c16;
    margin-left: 1em;
    font-weight: 300;
    font-size: 1.3em;
    display: flex;
    img {
      width: 5em;
      
    }
    &:hover {
      color: #b6cf6a;
    }
  }
  .title {
    padding: 1em;
    display: flex;
    direction: ltr;
    img {
      margin-right: 0.4em;
    }
  }
`;

const Links = styled.div`
  display: flex;
  padding: 1em;
  align-items: flex-end;
  div {
    display: flex;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <Links>
        <div>
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
      </Links>
      <div className="title">
        <Link to="/">
          <div>
            <h1>Solar Sensei</h1>
            <div>
              {" "}
              <img src={sunpower} alt="sunpower logo" />
              official distributer
            </div>
          </div>
        </Link>
      </div>
    </Nav>
  );
}
