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
    direction: rtl;
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
    border: 0.3em solid #637c16;
  }
  .img_container {
    display: flex;
    direction: rtl;
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
      margin-right: 0.5em;
    }
    div {
      margin-bottom: 2em;
    }
    &:hover {
      background-color: #edf8c9;
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
      margin-right: 6em;
      border: 0.3em solid #637c16;

      margin-left: 1.3em;
    }
    p {
      padding: 1em;
      font-size:1.2em;
      direction: rtl;
      margin-bottom: -2em;
    }
  }
  .sensei {
    direction: rtl;
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

export default function HomePage() {
  const [imgs, setImgs] = useState([
    {
      src: solar,
      name: "פאנלים",
      content:
        "מפיץ רשמי של חברת SunPower – יצרן הפאנלים הפוטו-וולטאים הוותיק ואיכותי בעולם",
    },
    {
      src: solar,
      name: "ממירים",
      content: "מוכר מורשה (Reseller) של חברת SolarEdge",
    },
    {
      src: solar,
      name: "מערכות עגינה (קונסטרוקציה)",
      content:
        "יצרן של מערכות עגינה למתקנים סולאריים על גגות - בשותפות עם חברת ניב רז",
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
            הערך המרכזי שלנו הוא שירות ללא פשרות. אנו מלווים באהבה את מאות
            לקוחותינו: חברות יזמיות, מתקינים (EPC) וקבלני ביצוע משלב האפיון, דרך
            אספקת הציוד ובשירות שלאחר מכן.
          </h2>
        </div>
        <div className="about">
          {imgs.map((img) => {
            return <Img src={img.src} name={img.name} content={img.content} />;
          })}
        </div>
        <div className="eran_kopel">
          <div>
            <p>
              סולאר סנסאי (*) מנוהלת על ידי ערן קופל, מהנדס תעשיה, בעל ניסיון של
              12 שנים בתחום הסולארי
            </p>
          </div>
          <img src={eran} />
        </div>
        <div className="sensei">
          <p>
            (*) סנסאי משמעו מורה, מדריך ביפנית. סן (sen 先) = לפני, הקודם, בראש.
            סאי (sei 生) = לידה, חיים, מקור. סנסאי הוא "זה שנולד קודם" כאשר
            המילה "נולד" אינה מתייחסת לגיל כרונולוגי אלא לוותק
          </p>
        </div>
      </HomeStyles>
    </div>
  );
}
