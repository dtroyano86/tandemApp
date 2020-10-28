import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import trivia from '../Apprentice_TandemFor400_Data.json';
import Question from './question';
import ScoreModal from './scoreModal';

const QuestionPage = ({ setScore, score }) => {
  const [questionList, setQuestionList] = useState([]);
  const [current, setCurrent] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [missed, setMissed] = useState([]);

  const beginQuiz = () => {
    setCurrent(0);
    setModalShow(false);
    setMissed([]);
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
    if (questionList[current].correct === answer) {
      setScore((prev) => prev + 1);
    } else {
      setMissed((prev) => {
        const newQuestion = {
          question: questionList[current].question,
          answer: questionList[current].correct,
        };
        const updated = [...prev];
        updated.push(newQuestion);
        return updated;
      });
    }
  };

  const nextQuestion = () => {
    if (current === questionList.length - 1) {
      setModalShow(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <>
      <ScoreModal
        score={score}
        show={modalShow}
        handleClose={() => setModalShow(false)}
        total={questionList.length}
        missed={missed}
      />
      <Jumbotron>
        {!questionList.length
          ? (
            <>
              <h1>Get ready to answer some trivia!</h1>
              <Button onClick={beginQuiz}>Bring it on!</Button>
            </>
          )
          : (
            <Question
              submitAnswer={submitAnswer}
              question={questionList[current]}
              nextQuestion={nextQuestion}
              score={score}
            />
          )}
      </Jumbotron>
    </>
  );
};

export default QuestionPage;

QuestionPage.propTypes = {
  setScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};
