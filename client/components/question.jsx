import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';

const Question = ({ question, submitAnswer }) => {
  const [selected, setSelected] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const newOptions = [];
    const potentials = [...question.incorrect];
    potentials.push(question.correct);

    while (newOptions.length < question.incorrect.length + 1) {
      const index = Math.floor(Math.random() * potentials.length);
      newOptions.push(potentials.splice(index, 1)[0]);
    }
    setOptions(newOptions);
  }, []);

  return (
    <div>
      <Row>
        <h2>
          {question.question}
        </h2>
      </Row>
      <Row>
        <ButtonGroup vertical size="lg">
          {options.map((item) => (
            <Button onClick={() => setSelected(item)} key={item}>{item}</Button>
          ))}
        </ButtonGroup>
      </Row>
      <Row>
        <Button disabled={!selected} onClick={() => submitAnswer(selected)}>Submit Answer</Button>
      </Row>
    </div>
  );
};

export default Question;

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct: PropTypes.string.isRequired,
  }).isRequired,
  submitAnswer: PropTypes.func.isRequired,
};
