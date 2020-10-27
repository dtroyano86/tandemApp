import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Home = ({setScore}) => {
  const startTrivia = () => {
    setScore(0);
  };

  return (
    <Jumbotron>
      <h1>Trivia Questions</h1>
      <p>Get ready to learn some trivia!</p>
      <Link to="/trivia">Start Trivia!</Link>
    </Jumbotron>
  );
};

export default Home;
