import React, { Component } from 'react';
import '../styles/App.css';
import ListContainer from './ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Joseph's Todo List</h1>
        </header>
        <ListContainer />
      </div>
    );
  }
}

export default App;
