import React from 'react';
import './App.css';
import {ENCODE} from './Encode';
import {UNIX} from './Unix';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ENCODE />
      <UNIX />
      </header>
    </div>
  );
}

export default App;
