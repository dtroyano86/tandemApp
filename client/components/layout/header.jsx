import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ({ score }) => (
  <Navbar>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="header-navbar" />
    <Navbar.Collapse id="header-navbar">
      <Nav>
        <Nav.Link link="/score">Scores</Nav.Link>
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
