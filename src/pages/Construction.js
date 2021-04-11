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
  }
  .pictures {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    img {
      height: 14em;
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
        <DownloadButton>מסמכים להורדה</DownloadButton>
        <div className="title"></div>
        <div className="pictures">
          {photos.map((photo) => {
            return <Photo src={photo} />;
          })}
        </div>
      </div>
    </Main>
  );
}
