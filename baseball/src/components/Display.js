import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let innDisplay = this.props.inning === 1 ? "st" : (this.props.inning === 2 ? "nd" : (this.props.inning === 3 ? "rd" : "th"));
    innDisplay = `${this.props.inning}${innDisplay} Inning`;
    
    return(
      <div className='display'>
        <div className='displayHeader'>
          <div className='player'>Player{this.props.player}</div><div className='inning'>{innDisplay}</div>
        </div>
        <div className='scores'>
          <div className='team' data-testid="team1score">Team1: 
            <ul>
              { this.props.team1score.map( (score) =>
                (<li>{score}</li>)
              )}
            </ul>
          </div>
          <div className='team' data-testid="team2score">Team2: 
            <ul>
              { this.props.team2score.map( (score) =>
                (<li>{score}</li>)
              )}
            </ul>          
          </div>
        </div>
        <div className='balls'>balls</div>
        <div className='strikes'>strikes</div>
        <div className='outs'>outs</div>
      </div>
    );
  };
};

export default Display;