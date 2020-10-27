import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ScoreModal = ({ show, handleClose, score, total, missed }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Congratulations you got {score} out of {total}</Modal.Title>
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
        <Button>Submit Score</Button>
      </Modal.Footer>
    </Modal>
  )
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
