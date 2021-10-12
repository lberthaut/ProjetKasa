import React from 'react';
import PropTypes from 'prop-types';


export default class Tags extends React.Component{
    render(){
        const {tags}= this.props;

        return(
            <ul className="tag-list">
                {tags.map((tag, index) =>(
                    <li className="tag" key={index}>{tag}</li>
                ))}
            </ul>
        );
    }
}

Tags.propTypes={
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};