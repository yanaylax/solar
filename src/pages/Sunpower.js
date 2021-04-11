import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useStyles from "../styles/useStyles";
import solar from "../images/solar_array2.jpg";
import eran from "../images/eran.jpg";
import solaredge from "../images/SolarEdge_logo.svg";
import sunpower from "../images/Sunpower_logo.svg";
import output from "../images/output.jpg";
import guarantee from "../images/guarantee.jpg";
import experience from "../images/experience.jpg";
import resilience from "../images/resilience.jpg";
import panelInfo1 from "../pdf/SunPower_475w-500w_ datasheet_p3_upp.pdf";
import panelInfo2 from "../pdf/SunPower_525-540w_datasheet_bifacial_p5_upp.pdf";
import warranty from "../pdf/SunPower_Maxeon_Solar_P3_and P5_UPP_Warranty_(25-25_year).pdf";
import presentation from "../pdf/SunPower Performance Series Module.pdf";
import PdfViewer from "../components/PdfViewer";
import Modal from "../components/modal/Modal";

const Main = styled.div`
  direction: rtl;
  display: flex;
  justify-content: center;
  .buttons {
    display: flex;
    flex-direction: row;
    a {
      text-decoration: none;
    }
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
      width: 7em;
      height: 1.4em;
    }
  }
  .more {
    font-size: 2em;
    text-align: center;
    padding: 1em;
    transition: 0.2s ease-in-out;
    border-bottom: 0.3em solid #637c16;
    &:hover {
      background-color: #b6cf6a;
      cursor: pointer;
    }
  }
  .sunpower {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 3em;
    h2 {
      font-size: 2em;
    }

    img {
      width: 12em;
      height: 4em;
      margin-right: 1em;
    }
  }
  .more_data {
    background-color: #dff3a3;
    max-height: 600px;
    display: flex;
    flex-direction: row;
    transition: max-height 0.5s;

    h2 {
      padding: 1em;
      opacity: 1;
      transition: opacity 0.8s ease-in;
    }
    img {
    }
  }
  .data_hidden {
    visibility: hidden;
    max-height: 0px;
    h2 {
      opacity: 0;
    }
  }
  .show_img {
    transition:opacity 1.2s ease-in;
    opacity: 1;
    max-height: 30em;
  }
  .img_hidden {
    visibility: hidden;
    max-height:0px;
    opacity: 0;
  }
  .downloads {
    display: flex;
    flex-direction: row;
  }
  .subtitle {
    text-align: center;
    padding-right: 4em;
    padding-left: 4em;
    margin-bottom: 2em;

    p {
      font-size: 1.5em;
    }
  }
`;

const Window = ({ name, info, src }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="more"
      >
        {name}
      </div>
      <div className={show ? "more_data" : "data_hidden"}>
        <h2>{info}</h2>
        <img className={show ? "show_img" : "img_hidden"} src={src} />
      </div>
    </div>
  );
};

export default function Sunpower() {
  const { DownloadButton } = useStyles();
  const modal = useRef(null);

  const [files, setFiles] = useState([
    panelInfo1,
    panelInfo2,
    warranty,
    presentation,
  ]);
  const [more, setMore] = useState([
    {
      name: "יותר תפוקה",
      data: "מקדם טמפרטורה נמוך של 0.34%-  מבטיח לך ירידה מתונה בתפוקה בחום",
      src: output,
    },
    {
      name: "יותר אחריות",
      data:
        "25 שנות אחריות מוצר ו 25 שנות אחריות תפוקה. 98% בשנה הראשונה. ירידה של 0.45% בשנה",
      src: guarantee,
    },
    {
      name: "יותר נסיון",
      data:
        "חברת סאנפאוור הנה יצרן הפאנלים הוותיק בעולם עם למעלה מ 35 שנות ניסיון",
      src: experience,
    },
    {
      name: "יותר עמידות",
      data:
        "חברת SunPower פיתחה טכנולוגיה בסטנדרט של תעשיית החלל לקפסוליזציה מלאה של התאים, כהגנה מפני לחות וקורוזיה וכן לעמידות בפני סדקים וקצרים הנובעים מטלטולים והשפעות אקלים",
      src: resilience,
    },
    // { name: "יותר נצילות", data: "הפאנלים של SUNPOWER...." },
  ]);

  return (
    <Main>
      <div className="title">
        <div className="buttons">
          <a href="https://www.sunpower.com/">
            <DownloadButton>
              <img className="button_img" src={sunpower} />
            </DownloadButton>
          </a>
          <a href={files[0]}>
            {" "}
            <DownloadButton>דף מידע לפאנל 475-490 וואט</DownloadButton>
          </a>
          <a href={files[1]}>
            {" "}
            <DownloadButton>דף מידע לפאנל 525-530 וואט</DownloadButton>
          </a>

          <a href={files[2]}>
            <DownloadButton>כתב אחריות</DownloadButton>
          </a>
          <a href={files[3]}>
            <DownloadButton>מצגת טכנולוגית</DownloadButton>
          </a>
        </div>
        {/* <Modal ref={modal}>
          <PdfViewer pdf={file} />
        </Modal> */}
      </div>

      <div className="sunpower">
        <h2>הפאנל שנותן לך יותר</h2>
        <img src={sunpower} />
      </div>
      <div className="subtitle">
        <p>
          הבחירה ב SunPower הנה הבחירה הבטוחה: יצרנית פאנלים פרימיום, מדורגת כ
          Top Tier 1 על פי דירוג Bloomberg , נודעת בזכות חדשנות טכנולוגית, מחקר
          פורץ דרך, אמינות מוצר יוצאת דופן ואחריות מקיפה ביותר
        </p>
      </div>
      {more.map((item) => {
        return (
          <Window
            key={item.name}
            name={item.name}
            info={item.data}
            src={item.src}
          />
        );
      })}
    </Main>
  );
}
