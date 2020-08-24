import React, {Component} from 'react';
import {
  Button,
  Form,
  FormControl,
  Navbar,
  Nav
} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  /**
   * Saves the input change of the query
   * @param event The input change event
   */
  onSearchChange = (event) => {
    this.setState({name: event.target.value});
  }

  /**
   * Queries for the specific company
   * @param {String} name Name of the company
   */
  onSearch = (name) => {
    this.props.searchCompany(name);
  }

  render() {
    const {onRouteChange} = this.props;
    const {name} = this.state;

    return (
      <div className="" >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Company Management App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => onRouteChange('home')}>Home</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onSearchChange}/>
              <Button variant="outline-success" onClick={() => {this.onSearch(name)}}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
  
}

export default Navigation;