import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ScoreModal = ({
  show,
  handleClose,
  score,
  total,
  missed,
}) => {
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submitScore = () => {
    const newScore = { name, score };
    fetch('/api/high_scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newScore),
    })
      .then((response) => response.json())
      .then((_data) => setRedirect(true))
      .catch((err) => console.log(err));
  };

  const changeHandler = (e) => setName(e.target.value);

  return (
    <>
      {redirect ? <Redirect to="/scores" /> : null}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Congratulations you got {score} out of {total}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!missed.length
            ? <h2>You got them all right!</h2>
            : missed.map((item) => (
              <div key={item.question}>
                <p>{item.question}</p>
                <p>Correct: {item.answer}</p>
              </div>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Group>
              <Form.Control value={name} onChange={changeHandler} placeholder="Enter name" />
            </Form.Group>
            <Button onClick={submitScore}>Submit Score</Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ScoreModal;

ScoreModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  missed: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    }),
  ).isRequired,
};
