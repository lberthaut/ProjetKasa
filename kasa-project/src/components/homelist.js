import React from 'react';
import {logements} from '../data/logements.js';
import '../styles/homelist.js';
import Card from './card.js';


export default class Homelist extends React.Component {
    render(){
        return(
            <main className="homelist">
                {logements.map(({id, title, cover})=>(
                    <article className="card" key={id}>
                        <Card id={id} title={title} src={cover}/>
                    </article>
                ))}
            </main>
        )
    }
}