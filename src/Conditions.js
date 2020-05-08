import React from 'react';
import { Card as ReactCard } from 'react-bootstrap'
import Marker from './Marker'

class Conditions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    }
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  renderMarkersList() {
    return (
      <ul>
        { this.props.markers.map(marker => {
          return (<Marker name={ marker.name } note={ marker.note } />);
        })}
      </ul>
    );
  }

  render() {
    return (
      <ReactCard style={{ width: '20rem' }} onClick={ () => { this.toggle() } } bg={ this.state.active ? 'light' : 'dark' } text={ this.state.active ? 'dark' : 'light' }>
        <ReactCard.Body>
          <ReactCard.Title>{ this.props.showCondition ? this.props.name : '...' }</ReactCard.Title>
          { this.renderMarkersList() }
        </ReactCard.Body>
      </ReactCard>
      );
  }
}
export default Conditions;
