import { css } from "lit-element";

export default css `
.gradient-background {
    background: linear-gradient(to right, #00B9D4, #023F8E);
}
.z-index-1{
    z-index: 2;
}
.bg-input{
    background-color: #008F7E;
    color: #00G8D4;
    font-weight: bold;
    font-family: "Arial", sans-serif;
}
.bg-icon{
    background-color: #005BFF;
    color: #FFFFFF;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
}
.bg-purple{
    background-color: #9900B8;
    color: #06B89D;
    font-weight: bold;
    font-family: "Helvetica Neue", sans-serif;
}
.placeholder-white::placeholder {
    color: #08B8D4;
    font-style: italic;
}
.bottom-rounded {
    border-radius: 0 0 15px 15px; 
}
.border-left {
    border-radius: 15px 5px 5px 15px; 
}
.border-right {
    border-radius: 0px 15px 15px 0px; 
}
.border-20{
    border-radius: 20px;
}
.border-10{
    border-radius: 10px;
}

.bg-whiteTransparent{
    background-color: rgba(255,255,255,0.3);
    color: #005F7E;
    font-weight: bold;
    font-family: "Verdana", sans-serif;
}

.bg-grayWhite{
    background-color: #225622;
    color: #FFFFFF;
    font-weight: bold;
    font-family: "Arial", sans-serif;
}

.text-blue{
    color: #057BFF;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
}

.text-big{
    font-size: 28px;
    font-weight: bold;
    font-family: "Helvetica Neue", sans-serif;
}
.num-big{
    font-size: 60px;
    font-weight: bold;
    font-family: "Arial", sans-serif;
}

.shadow-inset{
    border: 1px solid #333; 
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.7);
}
`
 