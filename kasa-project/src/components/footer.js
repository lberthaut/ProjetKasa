import React from 'react';
import whitelogo from '../images/whitelogo.svg';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <img className="logo-footer" src={whitelogo} alt="logo"></img>
                <p className="content-footer">© 2021 Kasa. All rights reserved</p>
            </footer>
        );
    }
}