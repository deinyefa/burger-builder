import React from 'react';
import appStyles from './App.module.css';

function App() {
  return (
    <div className={appStyles.App}>
      <header className={appStyles.AppHeader}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={appStyles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
