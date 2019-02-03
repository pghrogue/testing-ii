import React, { Component } from 'react';
import Display from './Display';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inning: 1,
      team1score: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      team2score: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      balls: 0,
      strikes: 0,
      outs: 0,
      player: 1
    };
  };

  render() {
    return(
      <div className='game'>
        <Display {...this.state} />
        <div className='dashboard'>
          <button>Ball</button>
          <button>Strike</button>
          <button>Foul</button>
          <button>Hit</button>
          <button>Run</button>
        </div>
      </div>
    );
  };
};

export default Dashboard;