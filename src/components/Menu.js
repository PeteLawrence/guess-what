import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

class Menu extends React.Component {

  /**
   * Renders the Marker component
   * @return {[type]} [description]
   */
  render() {
    return (
      <Navbar variant="dark" className='navbar-top'>
        <LinkContainer to="/">
          <Navbar.Brand>
            Guess W.H.O. Haematological Malignancies
          </Navbar.Brand>
        </LinkContainer>


      </Navbar>
    );
  }
}
export default Menu;
