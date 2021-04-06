import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useStyles from "../styles/useStyles";

const Main = styled.div`
  direction: rtl;
  display: flex;
  justify-content: center;

  .title{
  }
`;

export default function Construction() {
  const { DownloadButton } = useStyles();

  return (
    <Main>
      <div>
        <DownloadButton>מסמכים להורדה</DownloadButton>
        <div className="title"></div>
      </div>
    </Main>
  );
}
