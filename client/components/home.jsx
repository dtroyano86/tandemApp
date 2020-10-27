import React from 'react';

const Home = ({setScore}) => (
  <div>
    <h1>Home</h1>
    <button type="button" onClick={() => setScore((prev) => prev+1)}>increase</button>
  </div>
);

export default Home;
