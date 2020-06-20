import React from 'react';
import ConditionSet from '../ConditionSet.js'
import { Button, ButtonGroup } from 'react-bootstrap'

class GamePage extends React.Component {

  constructor(props) {
    super(props);

    let conditionSet = require('../conditions/bloodcancers.js').default;

    this.state = {
      showConditions: false,
      showMyCard: true,
      conditionSet: conditionSet,
      myCardCondition: conditionSet.conditions[Math.floor(Math.random(1) * conditionSet.conditions.length)]
    };
  }

  /**
   * Toggles the names of the different conditions
   * @return void
   */
  toggleConditions() {
    this.setState({ showConditions: !this.state.showConditions });
  }


  pickRandomCondition() {
    let conditions = this.state.conditionSet.conditions;

    return conditions[Math.floor(Math.random(1) * conditions.length)];
  }

  /**
   * Shuffles the conditions up
   * @return void
   */
  newGame() {

    // Shuffle conditions
    let conditionSetClone = {...this.state.conditionSet}; //clone the condition set
    conditionSetClone.conditions.sort((a, b) => {
      return (Math.random() > 0.5);
    });

    // Pick a random condition
    let myCardCondition = this.pickRandomCondition();

    this.setState({
      conditionSet: conditionSetClone,
      myCardCondition: myCardCondition
    });
  }

  /**
   * Renders the Marker component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <ConditionSet conditionSet={ this.state.conditionSet } showConditions={ this.state.showConditions } showMyCard={ this.state.showMyCard } myCardCondition={ this.state.myCardCondition }/>

        <ButtonGroup>
          <Button variant="secondary" onClick={ () => this.toggleConditions() }>Toggle Names</Button>
          <Button variant="secondary" onClick={ () => this.newGame() }>New Game</Button>
        </ButtonGroup>
      </>
    );
  }
}
export default GamePage;
