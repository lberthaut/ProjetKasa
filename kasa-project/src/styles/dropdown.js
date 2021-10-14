import {createGlobalStyle} from "styled-components";

const  Dropdownstyle = createGlobalStyle`
.infos {
  width: 80%;
  margin: 1.5em auto 0;
}

.dropdown-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35px;
  margin: 0 auto;
  padding: 0 10px;
  border: none;
  border-radius: 0.5em;
  background: #ff6060;
  font-family: 'MONTSERRAT';
  font-size: medium;
  color: white;
}

.dropdown-infos {
  position: relative;
  z-index: -1;
  width: 100%;
  margin: -1em auto 1em;
  padding: 2em 0.5em 0.5em;
  display: flex;
  border-radius: 0 0 0.5em 0.5em;
  background: #f7f7f7;
  color: #ff6060;
  font-size: medium;
}
`
export default Dropdownstyle;