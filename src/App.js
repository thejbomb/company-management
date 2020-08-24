import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Search from './components/Search/Search';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const initialState = {
  route: 'signin',
  email: '',
  invalid: false,
  signedIn: false,
  companies: [],
  company: {},
  query: {},
}

const url = 'http://localhost:3001/';

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  /**
   * Retrieves all the company data
   */
  componentDidMount() {
    fetch(url + 'companyAll', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => res.json())
    .catch(console.log)
    .then((companies) => {
      if (companies !== undefined) {
        this.setState({
          companies: companies
        })
      }
    })
  }

  /**
   * Loads user's email
   * 
   * @param {string} email The user's email.
   */
  loadUser = (email) => {
    this.setState({
      email: email,
      signedIn: true,
    })
  }

  /**
   * Creates the new company dataset
   * @param {Object} company An object of the new company 
   */
  addCompany = (company) => {
    this.setState({companies: [...this.state.companies, company]});
  }

  /**
   * Used to transition to edit company data component
   * @param {Object} company An object that holds the current company's data
   */
  editCompany = (company) => {
    this.setState({company: company});
    this.onRouteChange('edit');
  }

  /**
   * Updates the company data
   * @param {Object} companyUpdate Updated company object
   */
  changeCompany = (companyUpdate) => {
    const {companies} = this.state;

      let updatedList = companies.map((company) => {
        if (company.id === companyUpdate.id) {
          return companyUpdate;
        } else {
          return company;
        }
      })
      this.setState({companies: updatedList});    
  }

  /**
   * Sends a delete request to the backend and removes the selected company from the list
   * @param {String} name Name of the company that is to be deleted
   */
  deleteCompany = (name) => {
    let newList = this.state.companies.filter(company => company.name !== name);

    fetch(`${url}company/${name}`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
            })
        })
        .then((res) => res.json());
    this.setState({companies: newList});
  }

  /**
   * Sends a read request to the backend for the specified company
   * @param {String} name Name of the company that is being searched
   */
  searchCompany = (name) => {
    fetch(`${url}company/${name}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => res.json())
    .catch(console.log)
    .then((company) => {
      if (company !== undefined) {
        this.setState({query: company});
        this.onRouteChange('search');
      }
    })
    
  }

  /**
   * Is used to change the components based on the current route
   * @param {String} route Current route the user is on/will go to
   */
  onRouteChange = (route) => {
    const {signedIn} = this.state;
    if (signedIn) {
      this.setState({route: route});
    } else if (route === 'register') {
      this.setState({route: 'register'});
    } else {
      this.setState({route: 'signIn'});
    }
  }

  render() {
    const {companies, route, company, query} = this.state;

    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} searchCompany={this.searchCompany}/>
        { (() => {
          switch (route) {
            case 'create': {
              return (<Create onRouteChange={this.onRouteChange} addCompany={this.addCompany}/>)
            }
            case 'edit': {
              return (<Edit onRouteChange={this.onRouteChange} company={company} changeCompany={this.changeCompany}/>)
            }
            case 'search': {
              return (<Search onRouteChange={this.onRouteChange} company={query}/>)
            }
            case 'home': {
              return (<Home companies={companies} deleteCompany={this.deleteCompany} onRouteChange={this.onRouteChange} editCompany={this.editCompany}/>)
            }
            case 'register': {
              return (<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
            }
            default: {
              return (<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
            }
          }
        })()}
      </div>
    );
  }
  
}

export default App;
