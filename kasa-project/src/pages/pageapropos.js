import React, {Fragment} from 'react';
import Pertinent from '../components/pertinent.js'
import Banner from '../styles/banner.js';
import Dropdownstyle from '../styles/dropdown.js';
import Aproposstyle from '../styles/apropos.js';


export default class Apropos extends React.Component{
render(){
    return(
        <Fragment>
            <Pertinent/><Banner/><Dropdownstyle/><Aproposstyle/>
        </Fragment>
    )
}
}