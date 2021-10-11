import {createGlobalStyle} from "styled-components";

const Homeliststyle = createGlobalStyle`
.homelist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5em 0;
  border-radius: 0.5em;
  background: #F7F7F7;
  width: 70%;
  margin: auto;
}
`

export default Homeliststyle;