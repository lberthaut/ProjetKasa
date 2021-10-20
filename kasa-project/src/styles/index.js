import {createGlobalStyle} from "styled-components";

const PageStyle = createGlobalStyle`
body{
    font-family: Calibri;
}

@media screen and (max-width: 680px) {
  .banner-title {
    font-size: larger;
  }

  .annonces {
    padding: 0;
    background: transparent;
  }

  .card {
    margin: 0 0 1em;
  }

  .card,
  .card-background {
    width: 100%;
  }

  .carousel,
  .gallery-img {
    height: 300px;
  }

  .home {
    display: block;
    margin-bottom: 1em;
  }

  .home-infos {
    max-width: 100%;
  }

  .tag-list {
    margin-top: 0;
  }

  .proprietaire {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-top: 1em;
  }

  .infos-descriptions,
  .infos-equipements {
    margin: 1em 0 0;
  }

  .gallery {
    width: 100%;
  }

  .error-number {
    font-size: 8em;
  }

  .error-message {
    font-size: medium;
    width: 50%;
    margin: auto;
  }

  .width-dropdown{
      width: 100%;
      margin: 0 auto;
  }
}
`

export default PageStyle;