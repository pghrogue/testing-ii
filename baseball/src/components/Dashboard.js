import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div className='dashboard'>
        <button>Ball</button>
        <button>Strike</button>
        <button>Foul</button>
        <button>Hit</button>
        <button>Run</button>
      </div>
    );
  };
};

export default Dashboard;