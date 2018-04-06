import React, { Component } from 'react'
import './App.css'
import WeathersContainer from './components/WeathersContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Weather Board</h1>
        </div>
        <WeathersContainer />
      </div>
    );
  }
}

export default App