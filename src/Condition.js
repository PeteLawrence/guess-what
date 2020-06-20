import React from 'react';
import { Card } from 'react-bootstrap'
import Marker from './Marker'

class Condition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    }
  }

  /**
   * Toggles the condition
   * @return {[type]} [description]
   */
  toggle() {
    this.setState({ active: !this.state.active });
  }

  show() {
    this.setState({ active: true });
  }

  /**
   * Renders the markers for the condition
   * @return {[type]} [description]
   */
  renderMarkersList() {
    return (
      <ul>
        { this.props.markers.map(marker => {
          return (<Marker name={ marker.name } note={ marker.note } color={ marker.color } negative={ marker.negative } />);
        })}
      </ul>
    );
  }

  /**
   * Renders the Condition component
   * @return {[type]} [description]
   */
  render() {
    return (
      <Card onClick={ () => { this.toggle() } }  className={ this.state.active ? 'active col-sm-6' : 'hidden'} >
        <Card.Body>
          <Card.Title>{ this.props.showCondition ? this.props.name : '...' }</Card.Title>
          { this.renderMarkersList() }
        </Card.Body>
      </Card>
      );
  }
}
export default Condition;
