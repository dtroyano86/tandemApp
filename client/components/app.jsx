import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Footer from './layout/footer';
import Header from './layout/header';
import Home from './home';
import QuestionPage from './questionPage';
import ScoresPage from './scoresPage';

const app = () => {
  const [score, setScore] = useState(0);
  return (
    <BrowserRouter>
      <Container className="content">
        <Header score={score} />
        <Switch>
          <Route path="/trivia">
            <QuestionPage setScore={setScore} score={score} />
          </Route>
          <Route path="/scores">
            <ScoresPage />
          </Route>
          <Route path="/">
            <Home setScore={setScore} />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
export default app;
