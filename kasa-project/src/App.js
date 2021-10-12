import React from 'react';
import Accueil from './pages/pageaccueil.js';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Menu from './components/menu.js';
import Menustyle from './styles/menu.js';
import Erreurpage from './components/error.js';




export default class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
          <Menu/> <Menustyle/>
    <Switch>
        <Route exact path="/" component={Accueil}/>
        <Route path="/404" component={Erreurpage}/>
        <Redirect to="/404"/>
    </Switch>
    </BrowserRouter>
    )
  }
}