import React from 'react';
import ConditionSet from '../ConditionSet.js'
import { Button, ButtonGroup } from 'react-bootstrap'

class GamePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showConditions: false,
      showMyCard: false,
      conditionSet: require('../conditions/bloodcancers.js').default
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
   * Toggles the names of the different conditions
   * @return void
   */
  toggleMyCard() {
    this.setState({ showMyCard: !this.state.showMyCard });
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
   * Renders the Marker component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <ConditionSet conditionSet={ this.state.conditionSet } showConditions={ this.state.showConditions } showMyCard={ this.state.showMyCard } />

        <ButtonGroup>
          <Button variant="secondary" onClick={ () => this.toggleConditions() }>Toggle Names</Button>
          <Button variant="secondary" onClick={ () => this.toggleMyCard() }>Toggle My Card</Button>
          <Button variant="secondary" onClick={ () => this.shuffleConditions() }>Shuffle</Button>
        </ButtonGroup>
      </>
    );
  }
}
export default GamePage;
