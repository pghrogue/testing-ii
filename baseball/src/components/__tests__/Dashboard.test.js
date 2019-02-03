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

    it('causes an "Out" after 3 strikes', () => {
      const { getByText } = render(<Dashboard />);
      const button = getByText('Strike');

      fireEvent.click(button);
      expect(getByText('Strikes: 1')).toBeDefined();

      fireEvent.click(button);
      expect(getByText('Strikes: 2')).toBeDefined();

      fireEvent.click(button);
      expect(getByText('Strikes: 0')).toBeDefined();
      expect(getByText('Outs: 1')).toBeDefined();
    });
  });

  describe('The foul button', () => {
    it('causes a strike for the first two fouls if no strikes', () => {
      const { getByText } = render(<Dashboard />);
      const button = getByText('Foul');

      fireEvent.click(button);
      expect(getByText('Strikes: 1')).toBeDefined();

      fireEvent.click(button);
      expect(getByText('Strikes: 2')).toBeDefined();
    });

    it('does not add strikes when there are already 2', () => {
      const { getByText } = render(<Dashboard />);
      const button = getByText('Foul');

      fireEvent.click(getByText('Strike'));
      fireEvent.click(getByText('Strike'));
      fireEvent.click(button);

      expect(getByText('Strikes: 2')).toBeDefined();
    });
  });

  describe('The Hit button', () => {
    it('resets balls/strikes/fouls to 0', () => {
      const { getByText } = render(<Dashboard />);

      // Give it a strike & 2 balls:
      fireEvent.click(getByText('Strike'));
      fireEvent.click(getByText('Ball'));
      fireEvent.click(getByText('Ball'));

      // Fire a hit
      fireEvent.click(getByText('Hit'));

      // Balls & Strike displays should be reset, go to next player
      const balls = getByText('Balls: 0');
      expect(balls).toBeDefined();

      const strikes = getByText('Strikes: 0');
      expect(strikes).toBeDefined();

      const player = getByText('Player2');
      expect(player).toBeDefined();
    });
  });

  describe('The Run button', () => {});
});
