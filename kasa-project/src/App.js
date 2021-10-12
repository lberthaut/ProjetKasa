import React from 'react';
import Accueil from './pages/pageaccueil.js';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Menu from './components/menu.js';
import Menustyle from './styles/menu.js';
import Erreurpage from './components/error.js';
import Footer from './components/footer.js';
import Footerstyle from './styles/footer.js';
import Maisonpage from './pages/pagehome.js';

export default class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
          <Menu/> <Menustyle/>
    <Switch>
        <Route exact path="/" component={Accueil}/>
        <Route path="/:id" render={(props) => <Maisonpage {...props}/>}/>
        <Route path="/404" component={Erreurpage}/>
        <Redirect to="/404"/>
    </Switch>
    <Footer/><Footerstyle/>
    </BrowserRouter>
    )
  }
}