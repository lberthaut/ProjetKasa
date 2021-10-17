import {createGlobalStyle} from "styled-components";

const Tagsstyle = createGlobalStyle`
.tag-list {
    margin-top: 1em;
    width: 190px;
    text-align: center;
    display: flex;
    padding: 0;
    margin: 0;
    white-space: nowrap;
}

.tag {
    margin-top: 1em;
    margin-right: 1em;
    border-radius: 3em;
    background: #FF6060;
    color: white;
    font-size: 11px;
    height: 20px;
    line-height: 20px;
    padding: 0px 15px 0px 15px;
   text-align: center;
}

::marker{
    content: none;
}
`

export default Tagsstyle;