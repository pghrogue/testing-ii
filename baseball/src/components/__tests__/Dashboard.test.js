import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from '../Dashboard';

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
    render(<Dashboard />);
  });
});
