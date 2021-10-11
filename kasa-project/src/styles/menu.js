import {createGlobalStyle} from "styled-components";

const Menustyle = createGlobalStyle`
.logo {
  width: 100px;
}

nav {
  flex-shrink: 0;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.nav-link {
  margin: 0 15px;
  color: #ff6060;
}

.active {
  border-bottom: solid 2px #ff6060;
}
`

export default Menustyle;