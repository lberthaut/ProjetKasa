import {createGlobalStyle} from "styled-components";

const Footerstyle = createGlobalStyle`
.footer {
  flex-shrink: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100px;
  background-color: black;
}

.logo-footer {
  width: 75px;
  padding: 1.5em 0 0.5em;
}

.content-footer {
  width: 100%;
  color: white;
  font-size: xx-small;
  text-align: center;
  padding-bottom: 0.5em;
}
`

export default Footerstyle;