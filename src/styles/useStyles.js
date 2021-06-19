import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const DownloadButton = styled.button`

background-color:#bee3f6;
padding: 1em ;
margin: 1em;
color:#00558a;
width:fit-content;
font-weight:bold;
border:none;
border-radius:4px;
font-size:1em;
outline:none;
transition:0.2s ease-in-out;
font-family: "Alef", sans-serif;
display:flex;

&:hover{
    cursor: pointer;
    background-color:#dbf3ff;
}


`


export default function useStyles() {
    return {DownloadButton}
}
