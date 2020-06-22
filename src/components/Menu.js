import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
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
            <span>Guess W.H.O.</span><span className="d-none d-md-inline">Haematological Malignancies</span>
          </Navbar.Brand>
        </LinkContainer>

        <Nav className="ml-5">
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link>Play</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav.Item>
        </Nav>

      </Navbar>
    );
  }
}
export default Menu;
