import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/menu.js';


export default class Menu extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/projetkasa">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <ul>
          <NavLink className="nav-link" activeClassName="active" exact to="/projetkasa">
            Accueil
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/apropos">
            A Propos
          </NavLink>
        </ul>
      </nav>
    );
  }
}