import React from 'react';
import Banner from '../components/banner.js';
import Background from '../images/accueilbanner.jpg';


export default class Accueil extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Banner src={Background} alt='Paysage wallpaper' title="Chez vous, partout et ailleurs"/>
            </React.Fragment>
        )
    }
}