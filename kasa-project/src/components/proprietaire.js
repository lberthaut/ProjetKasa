import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Proprietaire extends React.Component{
    render(){
        const {name, src}= this.props;
        const firstName= name.split(' ')[0];
        const lastName= name.split(' ')[1];

        return(
            <Fragment>
                <div className="proprietaire-infos">
                    <p className="proprietaire-name">{firstName}<br/>{lastName}</p>
                    <img className="proprietaire-photo" src={src} alt={name}/>
                </div>
            </Fragment>
        );
    }
}

Proprietaire.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  };