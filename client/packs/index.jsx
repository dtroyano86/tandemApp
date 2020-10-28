import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/app';

document.addEventListener('DOMContentLoaded', () => {
  const newElement = document.createElement('div');
  newElement.setAttribute('class', 'outer');
  ReactDOM.render(
    <App />,
    document.body.appendChild(newElement),
  );
});
