import React from 'react';
import Error404 from '../components/error.js';
import Errorstyle from '../styles/page404.js';


export default class Erreurpage extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Error404/><Errorstyle/>
            </React.Fragment>
        );
    }
}