import React from 'react';

class Marker extends React.Component {

  /**
   * Renders the Marker component
   * @return {[type]} [description]
   */
  render() {
    return (
      <li className="marker" style={ {color: this.props.color} }>{ this.props.name } { this.props.note ?  <small>{ this.props.note }</small> : <></>}</li>
    );
  }
}
export default Marker;
