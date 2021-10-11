import React from 'react';
import Accueil from './pages/pageaccueil.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/menu.js';
import Menustyle from './styles/menu.js';



export default class App extends React.Component {
  render(){
    return (
      <Router>
      <Menu/> <Menustyle/>
        <Route exact path="/">
                    <Accueil />
        </Route>
      </Router>
    )
  }
}