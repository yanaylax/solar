import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useStyles from "../styles/useStyles";
import solar from "../Solar-panel-array-rooftop.jpg";
import eran from "../eran.jpeg";
import solaredge from "../solaredge.png";
import sunpower from "../sunpower.png";

const Main = styled.div`
  direction: rtl;
  display: flex;
  justify-content: center;
  .buttons {
    display: flex;
    flex-direction: row;
  }

  h2 {
    color: #404040;
    font-size: 36px;
    font-weight: 300;
    line-height: 1.1;
    padding: 1em;
  }
  p {
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    padding: 2px 0 12px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #404040;
    padding: 1em;
  }
  .about {
    display: flex;
    flex-direction: row;
    background-color: #f1f1f1;
    img {
      width: 30%;
    }
  }
  .aboutSolar {
    display: flex;
    flex-direction: row;
    img {
      width: 30%;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    img {
      width: 200px;
      height: 110px;
    }
  }
  .more {
    background-color: #f1f1f1;
    font-size: 30px;
    text-align: center;
    padding: 1em;
    margin-bottom: 0.5em;
    &:hover {
      background-color: #ececec;
      cursor: pointer;
    }
  }
  .sunpower {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .more_data {
    padding: 1em;
    transition: 0.5s ease-in-out;
  }
  .data_hidden {
    visibility:hidden;
    height:0px;
    transition: 0.5s ease-in-out;

  }
`;

const Window = ({ name, info }) => {
  const [show, setShow] = useState(false);

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div className="more">{name}</div>
      <div className={show ? "more_data" : "data_hidden"}>{info}</div>
    </div>
  );
};

export default function Sunpower() {
  const { DownloadButton } = useStyles();
  const [more, setMore] = useState([
    { name: "יותר תפוקה", data: "הפאנלים של SUNPOWER...." },
    { name: "יותר אחריות", data: "הפאנלים של SUNPOWER...." },
    { name: "יותר נסיון", data: "הפאנלים של SUNPOWER...." },
    { name: "יותר שירות", data: "הפאנלים של SUNPOWER...." },
    { name: "יותר עמידות", data: "הפאנלים של SUNPOWER...." },
    { name: "יותר נצילות", data: "הפאנלים של SUNPOWER...." },
  ]);

  return (
    <Main>
      <div className="title">
        <div className="buttons">
          <a href="https://www.solaredge.co.il/">
            <DownloadButton>לאתר Sunpower</DownloadButton>
          </a>
          <DownloadButton>מסמכים להורדה</DownloadButton>
        </div>
        <div className="sunpower">
          <h3>הפאנל שנותן לך יותר</h3>
          <img src={sunpower} />
        </div>
      </div>
      {more.map((item) => {
        return <Window name={item.name} info={item.data} />;
      })}
    </Main>
  );
}
