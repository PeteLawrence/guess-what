import React from 'react';
import Condition from './Condition.js'
import { CardDeck, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Marker from './Marker'

class ConditionSet extends React.Component {

  constructor(props) {
    super(props);

    this.myCondition = this.pickRandomCondition();
  }

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


  pickRandomCondition() {
    let conditions = this.props.conditionSet.conditions;

    return conditions[Math.floor(Math.random(1) * conditions.length)];
  }


  /**
   * Renders the markers for the condition
   * @return {[type]} [description]
   */
  renderMarkersList(markers) {
    return (
      <ul>
        { markers.map(marker => {
          return (<Marker name={ marker.name } note={ marker.note } color={ marker.color }  negative={ marker.negative } />);
        })}
      </ul>
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
        { this.props.showMyCard ?
          <div className="d-flex justify-content-center">
            <Card>
              <Card.Body>
                <Card.Title>{ this.myCondition.name }</Card.Title>

                { this.renderMarkersList(this.myCondition.markers ) }
              </Card.Body>
            </Card>
          </div>
          : ''
        }

        { this.renderConditions() }
      </>
    );
  }
}

export default ConditionSet;
