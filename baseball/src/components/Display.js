import React, { Component } from 'react';

class Display extends Component {
  constructor() {
    super();
    this.state = {
      inning: 1,
      runs: {
        team1: 0,
        team2: 0
      },
      balls: 0,
      strikes: 0,
      player: 1
    };
  }

  render() {
    return(
      <div className='display'>
        <div className='displayHeader'>
          <div className='player'>player</div><div className='inning'>1st inning</div>
        </div>
        <div className='scores'>
          <div className='team1'>Team1: 0</div>
          <div className='team2'>Team2: 0</div>
        </div>
        <div className='balls'>balls</div>
        <div className='strikes'>strikes</div>
      </div>
    );
  };
};

export default Display;