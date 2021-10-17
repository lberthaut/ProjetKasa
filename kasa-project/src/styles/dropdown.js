import {createGlobalStyle} from "styled-components";

const  Dropdownstyle = createGlobalStyle`
.infos {
  width: 70%;
  margin-left: 15%;
  margin-bottom: 30px;
}

.infos-descriptions, .infos-equipements{
  width: 45%;
}

.dropdown-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  margin: 0 auto;
  padding: 0 10px;
  border: none;
  border-radius: 0.5em;
  background: #ff6060;
  font-size: medium;
  color: white;
}

.dropdown-infos {
  position: relative;
  z-index: -1;
  display: flex;
  border-radius: 0.5em;
  background: #f7f7f7;
  color: #ff6060;
  font-size: medium;
  margin: 0;
  padding: 0;
  & > li{
    padding: 2px 0px 3px 8px;
  }
  & > p{
    padding: 2px 4px 6px 8px;
    margin: 0;
    line-height: 20px;
  }
}
.width-dropdown{
  width: 100%;
}
`

export default Dropdownstyle;