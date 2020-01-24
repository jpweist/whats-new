import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
// import Menu from '../../components/Menu';
// import '../../components/Menu.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        jim jim jim
      </div>
    );
  }
}

export default App;
