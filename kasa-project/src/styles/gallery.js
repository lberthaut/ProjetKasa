import {createGlobalStyle} from "styled-components";

const gallerystyle = createGlobalStyle`
.gallery {
  width: 70%;
  margin: 0 auto 2em;
  height: 415px;
}

.gallery-container {
  display: flex;
  position: relative;
}

.previous,
.next {
  position: absolute;
  height: 415px;
  width: 5em;
  border: none;
  background: transparent;
}

.previous:hover,
.next:hover {
  cursor: pointer;
}

.next {
  right: 0;
}

.previous-icon,
.next-icon {
  filter:drop-shadow(0 0 0.25em gray)
}

.gallery-img {
  width: 100%;
  border-radius: 1em;
  height: 415px;
  object-fit: cover;
}

.counter {
  position: absolute;
  width: 100%;
  bottom: 1em;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2.5px grey;
}
`

export default gallerystyle;