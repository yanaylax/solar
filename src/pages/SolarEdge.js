import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useStyles from "../styles/useStyles";
import solar from "../Solar-panel-array-rooftop.jpg";
import eran from "../eran.jpeg";
import solaredge from "../solaredge.png";


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
  .title{
      display:flex;
      justify-content:space-between;
      flex-direction:row;
      align-items:center;
      img{
          width:200px;
          height:60px;
      }
  }
  .desc{
      padding:3em;
  }
`;

export default function SolarEdge() {
  const { DownloadButton } = useStyles();
  return (
    <Main>
      <div className="title">
        <div className="buttons">
          <a href="https://www.solaredge.co.il/">
            <DownloadButton>לאתר Solaredge</DownloadButton>
          </a>
          <DownloadButton>מסמכים להורדה</DownloadButton>
        </div>
        <img src={solaredge}/>

      </div>
      <div className="about">
        <h2 className="desc">
          סולאר סנסאי הנו מוכר מורשה לממירים של חברת Solaredge בשיתוף פעולה עם
          מפיץ מורשה
        </h2>
        <img src={eran} />
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
