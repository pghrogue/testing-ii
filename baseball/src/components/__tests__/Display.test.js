import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../Display';

describe('The Display component', () => {
  afterEach(cleanup);

  // Arrange
  const props = {
    inning: 3,
    team1score: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    team2score: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    balls: 2,
    strikes: 1,
    outs: 0,
    player: 1,
    team: 1
  };

  // Act
  const { getByText } = render(<Display {...props} />);

  it('renders the display', () => {
    render(<Display {...props}/>);
  });

  describe('The header', () => {
    it('renders the player', () => {
      // Act
      const { getByText } = render(<Display {...props} />);

      // Assert
      const playerNode = getByText(`Player${props.player}`);
      expect(playerNode).toBeDefined();
    });

    it('renders the inning', () => {
      const { getByText } = render(<Display {...props} />);

      const inningNode = getByText('3rd Inning');
      expect(inningNode).toBeDefined();
    });
  });
  
  describe('The scorecard', () => {
    it('renders the scorecard for team1', () => {
      const { getByTestId } = render(<Display {...props} />);

      const scoreNode = getByTestId('team1score');
      let t1score = props.team1score.join('');
      let reduced = props.team1score.reduce( (acc,val) => acc + val, 0);
      t1score += ":"+reduced;
      expect(scoreNode).toHaveTextContent(t1score);
    });

    it('renders the score for team1 3rd inning', () => {
      const { getByTestId } = render(<Display {...props} />);

      const scoreNode = getByTestId('t1_3');
      expect(scoreNode).toHaveTextContent(props.team1score[2]);
    });

    it('renders the scorecard for team2', () => {
      const { getByTestId } = render(<Display {...props} />);

      const scoreNode = getByTestId('team2score');
      let t2score = props.team2score.join('');
      let reduced = props.team2score.reduce( (acc,val) => acc + val, 0);
      t2score += ":"+reduced;
      expect(scoreNode).toHaveTextContent(t2score);
    });

    it('renders the score for team1 8th inning', () => {
      const { getByTestId } = render(<Display {...props} />);

      const scoreNode = getByTestId('t1_8');
      expect(scoreNode).toHaveTextContent(props.team1score[7]);
    });

  });

  describe('The current batter', () => {
    it('shows the number of balls', () => {
      const { getByText } = render(<Display {...props} />);

      const ballsNode = getByText(`Balls: ${props.balls}`);
      expect(ballsNode).toBeDefined();
    });

    it('shows the number of strikes', () => {
      const { getByText } = render(<Display {...props} />);

      const strikesNode = getByText(`Strikes: ${props.strikes}`);
      expect(strikesNode).toBeDefined();
    });

    it('shows the number of outs', () => {
      const { getByText } = render(<Display {...props} />);

      const outsNode = getByText(`Outs: ${props.outs}`);
      expect(outsNode).toBeDefined();
    });
  });
});
