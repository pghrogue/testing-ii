import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let innDisplay = this.props.inning === 1 ? "st" : (this.props.inning === 2 ? "nd" : (this.props.inning === 3 ? "rd" : "th"));
    innDisplay = `${this.props.inning}${innDisplay} Inning`;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let team1 = this.props.team === 1 ? "team selected" : "team";
    let team2 = this.props.team === 2 ? "team selected" : "team";

    return(
      <div className='display'>
        <div className='displayHeader'>
          <div className='player'>Player{this.props.player}</div><div className='inning'>{innDisplay}</div>
        </div>
        <div className='scores'>
          <div className={team1} data-testid="team1score">Team1: 
            <ul>
              { this.props.team1score.map( (score, indx) =>
                (<li key={indx} data-testid={`t1_${indx+1}`}>{score}</li>)
              )}
              <li>:{this.props.team1score.reduce(reducer)}</li>
            </ul>
          </div>
          <div className={team2} data-testid="team2score">Team2: 
            <ul>
              { this.props.team2score.map( (score, indx) =>
                (<li key={indx} data-testid={`t2_${indx}`}>{score}</li>)
              )}
              <li>:{this.props.team2score.reduce(reducer)}</li>
            </ul>          
          </div>
        </div>
        <div className='balls'>Balls: {this.props.balls}</div>
        <div className='strikes'>Strikes: {this.props.strikes}</div>
        <div className='outs'>Outs: {this.props.outs}</div>
      </div>
    );
  };
};

export default Display;