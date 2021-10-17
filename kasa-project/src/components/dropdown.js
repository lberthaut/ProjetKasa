import React from 'react';
import PropTypes from 'prop-types';


export default class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state={isOpen: false};
    }


showInfos= () => {
    this.setState((prevState)=> ({
        isOpen: prevState.isOpen ? false : true
    }));
}

render (){
    const {isOpen}= this.state;
    const {className, id, title, content}= this.props;

    return(
        <article className={className}>
            <button className="dropdown-title" onClick={this.showInfos}>
                <span>{title}</span>
                <span>{isOpen ? (<i className="fas fa-chevron-up"></i>):(<i className="fas fa-chevron-down"></i>)}</span>
            </button>

            {isOpen && typeof content !== "string" &&(
                <ul className="dropdown-infos">
                    {content.map((item, id)=>(
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            )}

            {isOpen && typeof content === "string" && (
                <div key={id} className="dropdown-infos">
                    <p>{content}</p>
                </div>
            )}
        </article>
    )
}
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  };