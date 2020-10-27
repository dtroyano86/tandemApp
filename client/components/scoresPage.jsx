import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

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

  const removeScore = (id) => {
    fetch(`/api/high_scores/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setHighScores((prev) => {
          const updated = [...prev];
          return updated.filter((item) => item.id !== id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Jumbotron>
      <h1>Scores</h1>
      <ul>
        {highScores.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> - <span>{item.score}</span>
            <Button size="sm" variant="danger" onClick={() => removeScore(item.id)}>X</Button>
          </li>
        ))}
      </ul>
    </Jumbotron>
  );
};

export default ScoresPage;
