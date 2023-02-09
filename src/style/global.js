import { createGlobalStyle } from "styled-components";
var fontFamilyOxanium = "'Oxanium', cursive";
var fontFamilyWorkSans = "'Work Sans', sans-serif";
const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /*
        Font Family
    */
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
   /*
    Global Styles
   */
    body {
        font-family: 'Inter', sans-serif;
    }
    button {
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        font-family: 'Inter', sans-serif !important;
    }
    /* Calender */
    .DateRangePicker__CalendarSelection {
        background-color: #313131;
        border: 1px solid #404040;
    }
    .DateRangePicker__CalendarHighlight--single {
        background-color: #fff;
        border: 1px solid #404040;
    }
    .root{
        width:100vw ;
    }
    body{
    background-color: hsla(279, 42%, 9%, 1);
    background-image: url("./images/body-bg.jpg");
    background-repeat: repeat;
    color: var(--text-gainsboro);
    font-family: ${fontFamilyWorkSans};
    overflow-x: hidden;
    line-height:1.6 ;
    }
`;

/* background color */
var bgPurple = "hsla(267, 100%, 63%, 1)";
var bgPurpleAlpha30 = "hsla(267, 100%, 63%, 0.3)";
var bgDarkPurple = "hsla(279, 42%, 9%, 1)";
var bgOxfordBlue = "hsla(240, 63%, 13%, 1)";
var bgOxfordBlueAlpha95 = "hsla(240, 63%, 13%, 0.95)";
var bgOxfordBlueAlpha90 = "hsla(240, 63%, 13%, 0.9)";
var bgOxfordBlueAlpha80 = "hsla(240, 63%, 13%, 0.8)";
var textWhite = "#fff";
var textGainsBoro = "hsla(0, 0%, 87%, 1)";
var textChampagnePink = "hsla(23, 61%, 86%, 1)";
var textPurple = "hsla(267, 100%, 63%, 1)";

export const colorPlate = {
  bgPurple,
  bgPurpleAlpha30,
  bgDarkPurple,
  bgOxfordBlue,
  bgOxfordBlueAlpha95,
  bgOxfordBlueAlpha90,
  bgOxfordBlueAlpha80,
  textWhite,
  textGainsBoro,
  textChampagnePink,
  textPurple,
};

export default GlobalStyles;
