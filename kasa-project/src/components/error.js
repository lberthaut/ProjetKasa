import React from 'react';
import { Link } from 'react-router-dom';
import Errorstyle from '../styles/page404.js';

export default class Error404 extends React.Component {
    render() {
        return (
            <main className="error">
                <div className="error-content">
                    <p className="error-number">
                        404
                    </p>
                    <p className="error-message">
                        Oups! La page que vous demandez n'existe pas.
                    </p>
                </div>
                <Link className="nav-link error-back" to="/projetkasa">
                    Retourner à la page d'accueil
                </Link>
                <Errorstyle />
            </main>
        );
    }
}