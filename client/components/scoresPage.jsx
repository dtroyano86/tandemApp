import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ScoresPage = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    fetch('/api/high_scores')
      .then((response) => response.json())
      .then((data) => {
        setHighScores(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Jumbotron>
      <h1>Scores</h1>
      <ul>
        {highScores.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            -
            <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </Jumbotron>
  );
};

export default ScoresPage;
