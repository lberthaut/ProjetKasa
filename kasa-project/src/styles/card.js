import {createGlobalStyle} from "styled-components";

const Cardstyle = createGlobalStyle`
.card {
  position: relative;
  width: 275px;
  height: 275px;
  margin: 1em;
  border-radius: 0.5em;
}

.card-background {
  width: 275px;
  height: 275px;
  border-radius: 0.5em;
  object-fit: cover;
}

.card-title {
  position: absolute;
  width: 93%;
  padding-left: 7%;
  padding-top: 15%;
  bottom: 0;
  height: 4em;
  color: white;
  text-align: left;
  font-size: small;
  font-weight: lighter;
  border-radius: 0 0 0.5em 0.5em;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  font-size: 18px;
  margin: 0;
  display: flex;
  align-items: center;
}
`

export default Cardstyle;