import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import solar from "../images/solar_array2.jpg";
import eran from "../images/eran.jpg";
import sunpower from "../images/Sunpower_logo.svg";
import solaredge from "../images/SolarEdge_logo.svg";

const HomeStyles = styled.div`
  .title {
    text-align: center;
    padding: 5em;
    direction: ltr;
    h2 {
      font-size: 2em;
      margin-top: 1em;
    }
    p {
      font-size: 1.5em;
    }
  }

  .img {
    border-radius: 50%;
    width: 11em;
    height: 11em;
    margin-right: 2em;

    margin-left: 2em;
    border: 0.3em solid #00558a;
  }
  .img_container {
    display: flex;
    direction: ltr;
    flex-direction: row;
    align-items: center;
    transition: 0.3s ease-in-out;
    padding: 2em;
    border-radius: 3px;
    h3 {
      font-size: 1.5em;
      margin-bottom: 0;
    }
    p {
      font-size: 1.3em;
      margin-left: 0.5em;
    }
    div {
      margin-bottom: 2em;
    }
    &:hover {
      background-color: #dbf3ff;
      cursor: pointer;
    }
  }
  .eran_kopel {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    margin-top: 4em;
    align-items: center;
    img {
      width: 11em;
      height: 11em;
      border-radius: 50%;
      margin-left: 6em;
      border: 0.3em solid #00558a;

      margin-right: 1.3em;
    }
    p {
      padding: 1em;
      font-size: 1.2em;
      direction: ltr;
      margin-bottom: -2em;
    }
  }
  .sensei {
    direction: ltr;
    margin-top: 4em;
    padding: 1em;
  }
`;

const Img = ({ src, name, content }) => {
  return (
    <div className="img_container">
      <img className="img" src={src} />
      <div>
        <h3>{name}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default function English() {
  const [imgs, setImgs] = useState([
    {
      src: solar,
      name: "Modules",
      content:
        "Official distributor of SunPower PV modules in Israel and Palestine",
    },
    {
      src: solar,
      name: "Inverters",
      content: "Official reseller of SolarEdge inverters and optimizers",
    },
    {
      src: solar,
      name: "Mounting systems",
      content:
        "A producer of Aluminum mounting structures for rooftop PV systems",
    },
    // {
    //   src: solar,
    //   name: "מערכות שטיפה",
    //   content: "מפיץ מורשה של מערכות שטיפה אוטומטיות של חברת RST",
    // },
    // {
    //   src: solar,
    //   name: "לוחות",
    //   content: "מפיץ של רכיבי חשמל לבן הנדרשים למערכות סולאריות",
    // },
    // {
    //   src: solar,
    //   name: "אגירה",
    //   content: "מפיץ של מערכת אגירה המשולבת בצד ה DC במערכות מסחריות",
    // },
  ]);

  return (
    <div>
      <HomeStyles>
        <div className="title">
          <h2>
            Solar Sensei is a leading distributor of Solar energy systems in
            Israel and Palestine
          </h2>
          <p>
            Our core value is uncompromised service. We serve hundreds of
            customers: developers, EPC and installers from early definition of
            system needs, via supply of goods to post sale service.
          </p>
        </div>
        <div className="about">
          {imgs.map((img) => {
            return <Img key={img.name} src={img.src} name={img.name} content={img.content} />;
          })}
        </div>
        <div className="eran_kopel">
          <img src={eran} />

          <div>
            <p>
              Solar Sensei (*) is managed by Eran Kopel, industrial engineer
              with 12 years of experience in the PV market.
            </p>
          </div>
        </div>
        <div className="sensei">
          <p>
            (*) Sensei (先生) is an honorific term shared
            in Japanese, Korean and Chinese; literally translated as "one who
            comes before" and means "teacher"
          </p>
        </div>
      </HomeStyles>
    </div>
  );
}
