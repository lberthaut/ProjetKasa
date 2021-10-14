import {createGlobalStyle} from "styled-components";

const Errorstyle = createGlobalStyle`
main {
  justify-content: center;
}

.error {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #ff6060;
  text-align: center;
  height: 60vh;
}

.error-number {
  font-size: 10em;
  font-weight: 800;
  margin: 0;
}

.error-message {
  font-size: x-large;
}

.error-back {
  width: fit-content;
  position: fixed;
  bottom: 17em;
  font-size: small;
  border-bottom: solid 2px #ff6060;
}
`

export default Errorstyle;