import React from 'react';
import './App.css';

import Header from './Header';
import Main from './Main';

const App = () => {
  return (
    <div className="App">
      <section className="header">
        <Header />
      </section>
      <Main />

    </div>
  );
}

export default App;
