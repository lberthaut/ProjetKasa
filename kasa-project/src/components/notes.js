import React from 'react';
import PropTypes from 'prop-types';


export default class Notes extends React.Component{
    render(){
        const {notes}= this.props;
        const num = [1, 2, 3, 4, 5];

        return(
            <div className="notes">
                {num.map((index)=> 
                notes >= index ? (
                    <i key={index} className="fas fa-star full-star"></i>):
                    (<i key={index} className="fas fa-star enpty-star"></i>)
                
                )}
            </div>
        );
    }
}

Notes.propTypes ={
    note: PropTypes.oneOf(['1', '2', '3', '4', '5']).isRequired
};