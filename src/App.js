import React from 'react';
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Analytics from 'react-router-ga';

import AboutPage from './pages/AboutPage'
import GamePage from './pages/GamePage'
import Menu from './components/Menu.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends React.Component {

  /**
   * Renders the App component
   * @return {[type]} [description]
   */
  render() {
    return (
      <Container>
        <Router>
          <Analytics id="UA-170115765-1" debug>
            <Menu />

            <Switch>
              <Route exact path="/">
                <GamePage />
              </Route>

              <Route path="/about">
                <AboutPage />
              </Route>
            </Switch>
            </Analytics>
        </Router>
      </Container>
    );
  }
}

export default App;
