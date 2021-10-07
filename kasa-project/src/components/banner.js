import React from 'react';
import '../styles/banner.css';
import PropTypes from "prop-types"



export default class Banner extends React.Component {
    render(){
       const {src, alt, title}= this.props;

       return(
           <header className="banner">
               <h1 className="banner-title">{title}</h1>
               <img className="banner-background" src={src} alt={alt}></img>
           </header>
       );
    }
}

Banner.propTypes={
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string
};