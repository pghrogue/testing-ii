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
      player: 1,
      team: 1
    };
  };

  registerBall = (event) => {
    event.preventDefault();
    if( this.state.balls === 3 ) {
      // Batter walks if he reaches 4 balls, reset back to 0.
      this.setState({
        balls: 0
      });
    } else {
      const balls = this.state.balls + 1;
      this.setState({
        balls: balls
      });
    }
  };

  registerStrike = (event) => {
    event.preventDefault();
    if( this.state.strikes === 2 ){
      // 3rd strike = "Yerr Out!!";
      const newOuts = this.state.outs + 1;
      if( newOuts === 3 ){
        // 3 outs = switch teams - reset
        this.setState({
          inning: this.state.team === 2 ? this.state.inning + 1 : this.state.inning,
          balls: 0,
          strikes: 0,
          outs: 0,
          player: this.state.player + 1,
          team: this.state.team === 1 ? 2 : 1
        });
      } else {
        this.setState({ 
          balls: 0,
          strikes: 0, 
          outs: newOuts,
          player: this.state.player + 1
        });
      } // end 3 outs
    } // 3 strikes
    else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  registerFoul = (event) => {
    // Fouls cause strikes if there are less than 2 strikes
    if( this.state.strikes < 2 ){
      this.setState({
        fouls: this.state.fouls + 1,
        strikes: this.state.strikes + 1
      });
    } else {
      // No effect
      this.setState({ fouls: this.state.fouls + 1 });
    }
  };

  registerHit = (event) => {
    // Reset balls/strikes/fouls & switch player
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      player: this.state.player + 1
    });
  };

  registerRun = (event) => {
    // Adds to score for appropriate inning
    // Changes player
    // Resets balls/strikes/fouls
    const teamScore = this.state.team === 1 ? "team1score[{this.state.inning - 1}]" : "team2score[{this.state.inning - 1}]";
    const inningScore = this.state.team === 1 ? this.state.team1score[this.state.inning -1] : this.state.team2score[this.state.inning -1];
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      player: this.state.player + 1,
      [teamScore]: inningScore + 1
    });
  };

  render() {
    return(
      <div className='game'>
        <Display {...this.state} />
        <div className='dashboard'>
          <button onClick={this.registerBall}>Ball</button>
          <button onClick={this.registerStrike}>Strike</button>
          <button onClick={this.registerFoul}>Foul</button>
          <button onClick={this.registerHit}>Hit</button>
          <button onClick={this.registerRun}>Run</button>
        </div>
      </div>
    );
  };
};

export default Dashboard;