import React, { Component } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Display />
         <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
