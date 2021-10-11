import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/card.js'

export default class Card extends React.Component{
    render(){
        const {id, title, src}= this.props;

        return(
            <Link to={`/${id}`}>
                <img className="card-background" src={src} alt={title}/>
                <h2 className="card-title">{title}</h2>
            </Link>
        );
    }
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };