import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Home = ({setScore}) => {
  const [redirect, setRedirect] = useState(false);

  const startTrivia = () => {
    setScore(0);
    setRedirect(true);
  };

  return (
    <Jumbotron>
      {redirect ? <Redirect push to="/trivia" /> : null}
      <h1>Trivia Questions</h1>
      <p>Get ready to learn some trivia!</p>
      <Button onClick={startTrivia}>Start Trivia!</Button>
    </Jumbotron>
  );
};

export default Home;
