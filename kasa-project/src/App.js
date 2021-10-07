import React from 'react';
import Accueil from './pages/pageaccueil.js';



export default class App extends React.Component {
  render(){
    return (
      <React.Router>
        <React.Route path ="/" component={Accueil}/>
        </React.Router>
    )
  }
}