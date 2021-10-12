import React, {Fragment} from 'react';
import Error404 from '../components/error.js';
import Errorstyle from '../styles/page404.js';


export default class Erreurpage extends React.Component {
    render(){
        return(
            <Fragment>
                <Error404/>
                <Errorstyle/>
            </Fragment>
        );
    }
}