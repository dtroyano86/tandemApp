import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import trivia from '../Apprentice_TandemFor400_Data.json';
import Question from './question';

const QuestionPage = ({ setScore }) => {
  const [questionList, setQuestionList] = useState([]);
  const [current, setCurrent] = useState(0);

  const beginQuiz = () => {
    setCurrent(0);
    const potentials = [];
    trivia.forEach((item) => potentials.push(item));
    const questions = [];
    while (questions.length < 10) {
      const index = Math.floor(Math.random() * potentials.length);
      questions.push(potentials.splice(index, 1)[0]);
    }
    setQuestionList(questions);
  };

  const submitAnswer = (answer) => {
    console.log(answer);
  };

  return (
    <Jumbotron>
      {!questionList.length
        ? (
          <>
            <h1>Get ready to answer some trivia!</h1>
            <Button onClick={beginQuiz}>Bring it on!</Button>
          </>
        )
        : (
          <Question submitAnswer={submitAnswer} question={questionList[current]} />
        )}
    </Jumbotron>
  );
};

export default QuestionPage;

QuestionPage.propTypes = {
  setScore: PropTypes.func.isRequired,
};
