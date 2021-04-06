import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import solar from "../Solar-panel-array-rooftop.jpg";
import eran from "../eran.jpeg";

const HomeStyles = styled.div`
  direction: rtl;
  display: flex;
  justify-content: center;

  h2 {
    text-align: center;
    color: #404040;
    font-size: 36px;
    font-weight: 300;
    line-height: 1.1;
  }
  p {
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    padding: 2px 0 12px;
    text-align: center;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #404040;
  }
  .who_are_we {
    padding: 1em;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin: 1em;
    color: #404040;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    img {
      width: 200px;
      height: 200px;
      margin: 1em;
      border-radius: 50%;
      border: 3px solid #ef8b22;
      /* transition: all 0.5s ease-in-out;
      &:hover {
        transform: scale(1.2);
        opacity:0.5;
      } */
    }
    div {
      max-width: 300px;
      text-align: center;
      h2 {
        font-size: 22px;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
  .eran_kopel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1em;
    h2 {
      margin: 0;
      color: #231f20;
      font-size: 32px;
      font-weight: 600;
      line-height: 1.2;
      padding-bottom: 20px;
    }
    img {
      max-width: 350px;
      max-height: 350px;
    }

    h3 {
      color: #231f20;
      font-size: 20px;
      padding: 2px 0 12px;
      line-height: 1.4em;
      padding-bottom: 10px;
      padding-top: 45px;
    }
  }
  .eran_kopel2 {
    display: flex;
    flex-direction: row;
    margin: 1em;
    h2 {
      margin: 0;
      color: #231f20;
      font-size: 32px;
      font-weight: 600;
      line-height: 1.2;
      padding-bottom: 20px;
    }
    img {
      max-width: 350px;
      max-height: 350px;

      margin-left: 5em;
    }

    h3 {
      color: #231f20;
      font-size: 20px;
      padding: 2px 0 12px;

      line-height: 1.4em;
      padding-bottom: 10px;
      padding-top: 45px;
    }
  }
`;

export default function HomePage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <HomeStyles>
        <h2>באתר שלנו תוכלו למצוא...</h2>
        <p>
          SunPower makes going solar safe and simple from the comfort of your
          home.
        </p>
        <div className="who_are_we">
          <div>
            <Link>
              <img src={solar} alt="" />
            </Link>
            <h2>פאנלים</h2>
            <p>
              הפאנלים של חברת Sunpower, הפאנלים הטובים בעולם, בבלעדיות רק בסולאר
              סנסיי
            </p>
          </div>
          <div>
            <Link>
              <img src={solar} alt="" />
            </Link>
            <h2>קונסטרוקציה</h2>

            <p>
              הפאנלים של חברת Sunpower, הפאנלים הטובים בעולם, בבלעדיות רק בסולאר
              סנסיי
            </p>
          </div>
          <div>
            <Link>
              <img src={solar} alt="" />
            </Link>
            <h2>ממירים</h2>

            <p>
              הפאנלים של חברת Sunpower, הפאנלים הטובים בעולם, בבלעדיות רק בסולאר
              סנסיי
            </p>
          </div>
        </div>
        <div className="eran_kopel">
          <div>
            <h3>ערן קופל</h3>
            <h2>האדם מאחורי סולר סנסיי </h2>
          </div>
          <div>
            <img src={eran} />
          </div>
        </div>
        <div className="eran_kopel2">
          <div>
            <img src={eran} />
          </div>
          <div>
            <h3>ערן קופל</h3>
            <h2>האדם מאחורי סולר סנסיי </h2>
          </div>
        </div>
      </HomeStyles>
    </div>
  );
}
