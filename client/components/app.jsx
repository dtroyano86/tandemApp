import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Footer from './layout/footer';
import Header from './layout/header';
import Home from './home';
import QuestionPage from './questionPage';

const app = () => {
  const [score, setScore] = useState(0);
  return (
    <BrowserRouter>
      <Container>
        <Header score={score} />
        <Row>
          <Switch>
            <Route path="/trivia">
              <QuestionPage setScore={setScore} />
            </Route>
            <Route path="/">
              <Home setScore={setScore} />
            </Route>
          </Switch>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </BrowserRouter>
  );
};
export default app;
