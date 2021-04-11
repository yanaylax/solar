import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useStyles from "../styles/useStyles";
import solar from "../images/solar_array2.jpg";
import solar_array from "../images/solar_array.jpg";
import solaredge from "../images/SolarEdge_logo.svg";

const Main = styled.div`
  direction: rtl;
  display: flex;
  justify-content: center;
  .buttons {
    display: flex;
    flex-direction: row;
  }

  h2 {
    font-weight: 300;
    padding: 1em;
  }
  p {
    font-size: 1em;

    padding: 1em;
  }

  .about {
    display: flex;
    flex-direction: row;
    background-color: #dff3a3;
    img {
      width: 50%;
      height: 100%;
    }
  }
  .aboutSolar {
    display: flex;
    flex-direction: row;
    img {
      width: 40%;
      height: 100%;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    img {
      width: 10em;
      height: 4em;
      margin-left: 1em;
    }
    .button_img{
      width:6em;
      height:1.4em;
      margin-left:auto;
    }
  }
  .desc {
    padding: 3em;
  }
  
`;

export default function SolarEdge() {
  const { DownloadButton } = useStyles();
  return (
    <Main>
      <div className="title">
        <div className="buttons">
          <a href="https://www.solaredge.co.il/">
            <DownloadButton><img className="button_img" src={solaredge}/></DownloadButton>
          </a>
          <DownloadButton>מסמכים להורדה</DownloadButton>
        </div>
        <img src={solaredge} />
      </div>
      <div className="about">
        <h2 className="desc">
          סולאר סנסאי הנו מוכר מורשה לממירים של חברת Solaredge בשיתוף פעולה עם
          מפיץ מורשה
        </h2>
        <img src={solar_array} />
      </div>
      <div className="aboutSolar">
        <img src={solar} />
        <p className="desc">
          עוברים לאנרגיה סולארית וחוסכים בחשבון החשמל בעזרת SolarEdge, גם גג
          ביתכם יכול לייצר אנרגיה סולארית ירוקה ומתחדשת והכי חשוב – מניבת תשואה!
          החשמל שמופק על הגג שלכם, נמכר לחברת החשמל ואתם יכולים ליהנות מהכנסה
          קבועה לפי חוזה אל מול חברת חשמל ותשואה גבוהה על ההשקעה למשך 25 שנים
          לפחות.
        </p>
      </div>
    </Main>
  );
}
