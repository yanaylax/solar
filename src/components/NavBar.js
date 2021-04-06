import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sunpower from "../sunpower.png";
import solaredge from "../solaredge.png";

const Nav = styled.div`
  direction: rtl;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 1300px;

  margin: auto;
  .title {
  }
  h1 {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  a {
    text-decoration: none;
    color: #404040;
    font-size: 18px;
    margin-left: 15px;
    font-weight: 300;
    &:hover {
      color: #f7921e;
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;
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
        <Link to="/contact">צור קשר</Link>
        <Link to="/sunpower">
          <img width="150px" height="90px" src={sunpower} alt="sunpower logo" />
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
