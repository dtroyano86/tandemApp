import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({ score }) => (
  <Navbar>
    <LinkContainer to="/">
      <Navbar.Brand>Home</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="header-navbar" />
    <Navbar.Collapse id="header-navbar">
      <Nav>
        <LinkContainer to="/scores">
          <Nav.Link>Scores</Nav.Link>
        </LinkContainer>
      </Nav>
      <Navbar.Text>
        Score:
        <span>
          {score}
        </span>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

Header.propTypes = {
  score: PropTypes.number.isRequired,
};
