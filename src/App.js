import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';

const initialState = {
  route: 'home',
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

  addCompany = (company) => {
    this.setState({companies: [...this.state.companies, company]});
  }

  deleteCompany = (id) => {
    let newList = this.state.companies.filter(company => company.id !== id);
    this.setState({companies: newList});
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const {companies, route} = this.state;

    return (
      <div className="App">
        <Navigation/>
        { (() => {
          switch (route) {
            case 'create': {
              return (<Create onRouteChange={this.onRouteChange} addCompany={this.addCompany} id={companies.length + 1}/>)
            }
            case 'edit': {
              return (<Edit onRouteChange={this.onRouteChange}/>)
            }
            default: {
              return (<Home companies={companies} deleteCompany={this.deleteCompany} onRouteChange={this.onRouteChange}/>)
            }
          }
        })()}
        
      </div>
    );
  }
  
}

export default App;
