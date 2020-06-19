import React from 'react';
import ConditionSet from './ConditionSet.js'
import { Navbar, Container, Button, ButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showConditions: false,
      conditionSet: require('./conditions/bloodcancers.js').default
    };
  }

  /**
   * Toggles the names of the different conditions
   * @return void
   */
  toggleConditions() {
    this.setState({ showConditions: !this.state.showConditions });
  }


  /**
   * Shuffles the conditions up
   * @return void
   */
  shuffleConditions() {
    let conditionSetClone = {...this.state.conditionSet}; //clone tne condition set
    conditionSetClone.conditions.sort((a, b) => {
      return (Math.random() > 0.5);
    });

    this.setState({ conditionSet: conditionSetClone})
  }

  /**
   * Renders the App component
   * @return {[type]} [description]
   */
  render() {
    return (
        <Container>
          <Navbar variant="dark" className='navbar-top'>
            <Navbar.Brand href="#home">Guess W.H.O Haematological Malignancies</Navbar.Brand>
          </Navbar>

          <ConditionSet conditionSet={ this.state.conditionSet } showConditions={ this.state.showConditions } />

          <ButtonGroup>
            <Button variant="secondary" onClick={ () => this.toggleConditions() }>Toggle Names</Button>
            <Button variant="secondary" onClick={ () => this.shuffleConditions() }>Shuffle</Button>
          </ButtonGroup>
        </Container>
    );
  }
}

export default App;
