import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const DownloadButton = styled.button`

background-color:#0071b9;
padding: 1em 0.5em;
margin: 1em;
color:white;
width:fit-content;
font-weight:bold;
border:none;
border-radius:4px;
font-size:15px;
outline:none;

&:hover{
    cursor: pointer;
    background-color:#f7921e;
}


`

export default function useStyles() {
    return {DownloadButton}
}
