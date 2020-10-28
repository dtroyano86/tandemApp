import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';

const Question = ({
  question,
  submitAnswer,
  nextQuestion,
  score,
}) => {
  const [selected, setSelected] = useState(false);
  const [options, setOptions] = useState([]);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setSelected(false);
    setAnswered(false);
    const newOptions = [];
    const potentials = [...question.incorrect];
    potentials.push(question.correct);

    while (newOptions.length < question.incorrect.length + 1) {
      const index = Math.floor(Math.random() * potentials.length);
      newOptions.push(potentials.splice(index, 1)[0]);
    }
    setOptions(newOptions);
  }, [question]);

  const onSubmit = () => {
    submitAnswer(selected);
    setAnswered(true);
  };

  const checkColor = (item) => {
    if (item === question.correct) {
      return 'success';
    }
    if (item === selected) {
      return 'danger';
    }
    return 'primary';
  };

  return (
    <div>
      <Row>
        <h2>Score: {score}</h2>
      </Row>
      <Row>
        <h3>
          {question.question}
        </h3>
      </Row>
      <Row>
        {answered
          ? (
            <ButtonGroup vertical size="lg">
              {options.map((item) => (
                <Button disabled variant={checkColor(item)} key={item}>{item}</Button>
              ))}
            </ButtonGroup>
          ) : (
            <ButtonGroup vertical size="lg">
              {options.map((item) => (
                <Button onClick={() => setSelected(item)} key={item}>{item}</Button>
              ))}
            </ButtonGroup>
          )}
      </Row>
      <Row>
        {answered
          ? (
            <Button onClick={nextQuestion}>Next Question</Button>
          ) : (
            <Button disabled={!selected} onClick={onSubmit}>Submit Answer</Button>
          )}
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
  nextQuestion: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};
