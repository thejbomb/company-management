import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

const initialState = {
  companies: [
    { id: 1, name: 'Amazon', location: 'Bellevue, Washington', industry: 'E-commerce', ceo: 'Jeff Bezos', employees: '800,000'},
    { id: 2, name: 'Microsoft', location: 'Redmond, Washington', industry: 'Software Development', ceo: 'Bill Gates', employees: '150,000'},
    { id: 3, name: 'Tesla', location: 'Palo Alto, California', industry: 'Automotive', ceo: 'Elon Musk', employees: '40,000'},
    { id: 4, name: 'Facebook', location: 'Menlo Park, California', industry: 'Social media', ceo: 'Mark Zuckerberg', employees: '50,000'},
  ],
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    const {companies} = this.state;

    return (
      <div className="App">
        <Navigation/>
        <Home companies={companies}/>
      </div>
    );
  }
  
}

export default App;
