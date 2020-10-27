import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import trivia from '../Apprentice_TandemFor400_Data.json';
import Question from './question';

const QuestionPage = ({ setScore }) => {
  const [questionList, setQuestionList] = useState([]);

  const beginQuiz = () => {
    setQuestionList(trivia);
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
          <Question />
        )}
    </Jumbotron>
  );
};

export default QuestionPage;

QuestionPage.propTypes = {
  setScore: PropTypes.func.isRequired,
};
