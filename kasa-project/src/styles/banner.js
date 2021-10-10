import styled, { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
body{
    font-family: calibri;
}
.banner{
    position: relative;
    width: 70%;
    margin: auto;
    margin-bottom: 2em;
}
.banner-title{
    display: flex;
    width: 100%;
    height: 125px;
    z-index: 1;
    position: absolute;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: xx-large;
    color: white;
}
.banner-background{
    width: 100%;
    height: 125px;
    border-radius: 0.5em;
    object-fit: cover;
    filter: brightness(75%);
    object-position: 0 43%;
}
`;

export default globalStyle