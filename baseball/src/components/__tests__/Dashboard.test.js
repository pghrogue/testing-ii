import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from '../Dashboard';
import Display from '../Display';

describe('The Dashboard component', () => {
  afterEach(cleanup);

  // Arrange
  const state = {
    inning: 3,
    team1score: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    team2score: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    balls: 2,
    strikes: 1,
    outs: 0,
    player: 1
  };

  it('renders the dashboard', () => {
    render(<Dashboard {...state} />);
  });

  describe('The ball button', () => {
    it('increases ball count', () => {
      const { getByText } = render(<Dashboard />);
      const button = getByText('Ball');
  
      fireEvent.click(button);
  
      const ballDisplay = getByText('Balls: 1');
      //const ballDisplay = render(<Display {...state} />).getByText('Balls: 3');
      expect(ballDisplay).toBeDefined();
    });

    it('resets to 0 after ball 3', () => {
      const { getByText } = render(<Dashboard {...state} />);
      const button = getByText('Ball');
  
      fireEvent.click(button); // 1
      fireEvent.click(button); // 2
      fireEvent.click(button); // 3
      fireEvent.click(button); // 0
  
      const ballDisplay = getByText('Balls: 0');
      expect(ballDisplay).toBeDefined();
    });
  });

  describe('The Strikes button', () => {
    it('increases the strikes count', () => {
      const { getByText } = render(<Dashboard />);
      const button = getByText('Strike');

      fireEvent.click(button);

      const strikesDisplay = getByText('Strikes: 1');
      expect(strikesDisplay).toBeDefined();
    });
  });
});
