import {createGlobalStyle} from "styled-components";

const Proprietairestyle = createGlobalStyle`
.proprietaire-infos {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}

.proprietaire-name {
  margin-right: 0.5em;
  text-align: right;
  color: #ff6060;
  font-size: small;
}

.proprietaire-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
`

export default Proprietairestyle;