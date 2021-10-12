import React from 'react';
import Banner from '../components/banner.js';
import Background from '../images/accueilbanner.jpg';
import Bannerstyle from '../styles/banner.js';
import Homelist from '../components/homelist.js';
import Cardstyle from '../styles/card.js'
import Homeliststyle from '../styles/homelist.js';
import Footer from '../components/footer.js'
import Footerstyle from '../styles/footer.js'


export default class Accueil extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Banner src={Background} alt='Paysage wallpaper' title="Chez vous, partout et ailleurs"/><Bannerstyle />
                <Homelist/><Homeliststyle/><Cardstyle/>
                <Footer/><Footerstyle/>
            </React.Fragment>
        );
    }
}