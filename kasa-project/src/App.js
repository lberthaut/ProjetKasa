import React from 'react';
import Accueil from './pages/pageaccueil.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'



export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Route exact path="/">
                    <Accueil />
        </Route>
      </Router>
    )
  }
}