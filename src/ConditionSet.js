import React from 'react';
import Condition from './Condition.js'
import { Row, Col, CardDeck, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class ConditionSet extends React.Component {

  /**
   * Renders the markup for the conditions
   * @return {[type]} [description]
   */
  renderConditions() {
    let rows = [];
    let colCount = 8;

    for (let i = 0; i < this.props.conditionSet.conditions.length / colCount; i++) {
      let a = this.props.conditionSet.conditions.slice(i * colCount, (i+1) * colCount);
      rows.push(
        <div className="my-2">
          { this.renderRow(a) }
        </div>
      );
    }

    return rows;
  }

  /**
   * Renders the markup for a row of conditions
   * @param  {[type]} conditions [description]
   * @return {[type]}            [description]
   */
  renderRow(conditions) {
    return (
        <CardDeck>
          { conditions.map((condition) => {
            return (
                <Condition name={ condition.name } markers={ condition.markers } showCondition={ this.props.showConditions } />
            )
          })}
        </CardDeck>
    );
  }

  /**
   * Renders the ConditionSet component
   * @return {[type]} [description]
   */
  render() {
    return (
      <>
        <h1>{ this.props.conditionSet.name }</h1>
        { this.renderConditions() }
      </>
    );
  }
}

export default ConditionSet;
