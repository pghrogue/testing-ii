import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../Display';

describe('The Display component', () => {
  afterEach(cleanup);

  // Arrange
  const props = {
    inning: 3,
    runs: {
      team1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team2: [9, 8, 7, 6, 5, 4, 3, 2, 1]
    },
    balls: 2,
    strikes: 1,
    outs: 0,
    player: 1
  };

  // Act
  const { getByText } = render(<Display {...props} />);

  it('renders the display', () => {
    render(<Display />);
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
    });
  });
  
  describe('The scorecard', () => {
    it('renders the score for team1', () => {
      const { getByTestId } = render(<Display {...props} />);

      const scoreNode = getByTestId('team1score');
      expect(scoreNode).toHaveTextContent(props.runs.team1);
    });

    it('renders the score for team2', () => {
      const { getByTestId } = render(<Display {...props} />);

      const scoreNode = getByTestId('team2score');
      expect(scoreNode).toHaveTextContent(props.runs.team2);
    });
  });

});
