import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useStyles from "../styles/useStyles";
import solar from "../images/solar_array2.jpg";
import construction from "../images/construction.jpg";
import construction2 from "../images/construction2.jpg";
import array from "../images/solar_array.jpg";

const Main = styled.div`
  direction: rtl;
  display: flex;
  justify-content: center;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .pictures {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    img {
      height: 14em;
    }
  }
  .title_text {
    padding-left: 4em;
    padding-right: 4em;
    margin-top: 3em;
    h2 {
      font-size: 2em;
      text-align: center;
    }
    p{
      font-size:1.5em;
      text-align:center;
    }
  }
`;

const Photo = ({ src }) => {
  return <img src={src} />;
};

export default function Construction() {
  const { DownloadButton } = useStyles();
  const [photos, setPhotos] = useState([
    solar,
    construction,
    construction2,
    array,
    construction2,
    solar,
  ]);

  return (
    <Main>
      <div>
        <div className="title">
          <DownloadButton>חוברת הוראות למתקין</DownloadButton>
          <DownloadButton>מפרט לדוגמא</DownloadButton>
          <DownloadButton>תכנון מפורט לדוגמא</DownloadButton>
        </div>
        <div className="title_text">
          <h2>
            חברת סולאר סנסאי הנה יצרנית מובילה של מערכות לעיגון פאנלים סולאריים
            על גבי גגות.
          </h2>
          <p>
            עד כה סיפקנו למעלה מ 200 מגה-וואט של קונסטרוקציה מבוססת פרופילי
            אלומינים בשיטת ה "חיתוך וניקוב", לגגות איסכורית, בטון ורעפים.
            <br /> אנו מספקים פתרון מלא כולל כל האביזרים הנדרשים וכולל תכנון
            מפורט הנחשב לאיכותי בישראל.
            <br /> אנו מחויבים לאיכות החומרים ומבצעים את העבודה במסירות ובאהבה
            <br />
            אנו מעסיקים 17 עובדים, מתוכם 5 מהנדסים, כל זאת כדי לתת מענה מהיר ככל
            האפשר.
          </p>
        </div>
        <div className="title"></div>
        <div className="pictures">
          {photos.map((photo,index) => {
            return <Photo key={index} src={photo} />;
          })}
        </div>
      </div>
    </Main>
  );
}
