import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Footer from './layout/footer';
import Header from './layout/header';
import Home from './home';

const app = () => (
  <BrowserRouter>
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  </BrowserRouter>
);

export default app;
