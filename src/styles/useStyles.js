import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const DownloadButton = styled.button`

background-color:#DFF3A3;
padding: 1em ;
margin: 1em;
color:#637C16;
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
    background-color:#EDF8C9;
}


`


export default function useStyles() {
    return {DownloadButton}
}
