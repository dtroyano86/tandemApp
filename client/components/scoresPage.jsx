import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
      <ListGroup className="scores">
        {highScores.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row>
              <Col sm={8}>
                <span>{item.name}</span> - <span>{item.score}</span>
              </Col>
              <Col sm={{ span: 1, offset: 1 }}>
                <Button size="sm" variant="danger" onClick={() => removeScore(item.id)}>X</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Jumbotron>
  );
};

export default ScoresPage;
