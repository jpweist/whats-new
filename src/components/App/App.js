import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import Form from './Form'
// import Menu from '../../components/Menu';
// import '../../components/Menu.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render () {
    return (
      <div className="app">
      <Form />
      </div>
    );
  }
}

export default App;
