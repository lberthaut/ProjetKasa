import React, {Fragment} from 'react';
import {logements} from '../data/logements.js';
import Proprietaire from '../components/proprietaire.js';
import Gallery from '../components/gallery.js';
import Notes from '../components/notes.js';
import Tags from '../components/tags.js';
import Gallerystyle from '../styles/gallery.js';
import Proprietairestyle from '../styles/proprietaire.js';
import Tagsstyle from '../styles/tags.js';
import Pagehomestyle from '../styles/pagehome.js';
import Error404 from '../components/error.js';
import Notesstyle from '../styles/notes.js';


export default class MaisonPage extends React.Component{
    render(){
        const urlId = this.props.match.params.id;
        const current= logements.find((data)=> data.id === urlId);
        const {pictures, title, location, tags, host, rating/* , description, equipments */}= current || [];

        if (!current) return <Error404 />;
    
        return(
            <Fragment>
            <Pagehomestyle/>
                <header className="gallery">
                    <Gallery src={pictures} alt={title}/><Gallerystyle/>
                </header>
                <main>
                    <section className="home">
                        <article className="home-infos">
                            <h1 className="home-title">{title}</h1>
                            <p className="home-location">{location}</p>
                            <Tags tags={tags}/><Tagsstyle/>
                        </article>
                        <article className="proprietaire">
                            <Proprietaire name={host.name} src={host.picture}/><Proprietairestyle/>
                            <Notes notes={rating}/><Notesstyle/>
                        </article>
                    </section>
                    <section className="infos">
                        {/* dropdown */}
                    </section>
                </main>
            </Fragment>
        );
    }
}