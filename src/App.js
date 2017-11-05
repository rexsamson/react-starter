import React, { Component } from 'react';
import './styles/App.css';
import { Top } from './components';
import { Nav } from './components';
import { Bottom } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Nav />
        <Bottom />
      </div>
    );
  }
}

export default App;
