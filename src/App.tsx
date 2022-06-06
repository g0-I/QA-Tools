import React from 'react';
import './App.css';
import {ENCODE} from './pages/Encode';
import {UNIX} from './pages/Unix';

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
