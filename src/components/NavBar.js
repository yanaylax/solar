import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sunpower from "../images/Sunpower_logo.svg";
import solaredge from "../images/SolarEdge_logo.svg";

const Nav = styled.div`
  direction: rtl;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 1300px;
  margin: auto;
  background-color: #dff3a3;
  font-size:20px;

  @media only screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 10px;
  }

  .title {
    padding: 1em;
    padding-bottom: 0;
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
    img{
      height:3em;
      width:8em;
    }
    &:hover {
      color: #b6cf6a;
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  padding-bottom: 0;
`;

export default function NavBar() {
  return (
    <Nav>
      <div className="title">
        <Link to="/">
          <h1>Solar Sensei</h1>
          <div>SUNPOWER official distributer</div>
        </Link>
      </div>
      <Links>
        <Link to="/construction">קונסטרוקציה</Link>
        <Link to="/about">אודות</Link>
        <Link to="/sunpower">
          <img  src={sunpower} alt="sunpower logo" />
        </Link>
        <Link to="/solaredge">
          <img
            width="120px"
            height="40px"
            src={solaredge}
            alt="solaredge logo"
          />
        </Link>
      </Links>
    </Nav>
  );
}
