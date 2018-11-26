import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//******** Start Import Components ********//
import Home from './Home';
import Dashboard from './Dashboard';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Calendrier from './Components/Calendrier';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
//******** End Import Components ********// 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
          <Route  exact path='/' component={Home} /> 
          <Route  path='/Dashboard' component={Dashboard} /> 

          </Switch>
          <Calendrier />
          <Footer/>
		
        </div>
      <Widget />
      </BrowserRouter>
    );
  }
}


export default App;
