import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';

const initialState = {
  companies: [],
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {

    return (
      <div className="App">
        <Navigation/>
      </div>
    );
  }
  
}

export default App;
