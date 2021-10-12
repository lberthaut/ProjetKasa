import {createGlobalStyle} from "styled-components";

const Pagehomestyle = createGlobalStyle`
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-infos {
  max-width: 80%;
}

.home-title {
  color: #ff6060;
  font-size: x-large;
}

.home-location {
  color: #ff6060;
  font-size: small;
}

.infos {
  display: flex;
  flex: 1 100%;
  margin-top: 2em;
}

.infos-descriptif {
  flex: 1;
  margin-right: 1em;
}

.infos-equipements {
  flex: 1;
  margin-left: 1em;
}

.infos-equipements ul {
  display: grid;
}
`

export default Pagehomestyle;