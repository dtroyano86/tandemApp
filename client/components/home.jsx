import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

const Home = ({ setScore }) => {
  const startTrivia = () => {
    setScore(0);
  };

  return (
    <Jumbotron>
      <h1>Trivia Questions</h1>
      <p>Get ready to learn some trivia!</p>
      <LinkContainer to="/trivia">
        <Button onClick={startTrivia}>Start Trivia!</Button>
      </LinkContainer>
    </Jumbotron>
  );
};

export default Home;

Home.propTypes = {
  setScore: PropTypes.func.isRequired,
};
