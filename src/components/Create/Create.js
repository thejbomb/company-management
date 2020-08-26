import React, {Component} from 'react';
import { 
  Card, 
  Form, 
  Col, 
  Row, 
  Button 
} from 'react-bootstrap';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      industry: '',
      ceo: '',
      employees: '',
      invalid: false,
    }
  }

  /**
   * Saves the input change of the name
   * @param event The input change event
   */
  onNameChange = (event) => {
    this.setState({name: event.target.value.toLowerCase()});
  }

  /**
   * Saves the input change of the location
   * @param event The input change event
   */
  onLocationChange = (event) => {
    this.setState({location: event.target.value.toLowerCase()});
  }

  /**
   * Saves the input change of the industry
   * @param event The input change event
   */
  onIndustryChange = (event) => {
    this.setState({industry: event.target.value.toLowerCase()});
  }

  /**
   * Saves the input change of the ceo
   * @param event The input change event
   */
  onCEOChange = (event) => {
    this.setState({ceo: event.target.value.toLowerCase()});
  }

  /**
   * Saves the input change of the employees
   * @param event The input change event
   */
  onEmployeesChange = (event) => { 
    this.setState({employees: event.target.value.toLowerCase()});
  }

  /**
   * Sends a post request to the server to add a new company to the database
   */
  onCreate = () => {
    const {name, location, industry, ceo, employees} = this.state;
    const {addCompany, onRouteChange} = this.props;

    if (name.length > 0 && location.length > 0 && industry.length > 0 && ceo.length > 0 && employees.length > 0) {
      let company = {name, location, industry, ceo, employees};
      fetch('http://localhost:3001/company', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            company: company
        })
    })
    .then((res) => res.json())
    .catch(console.log)
    .then((company) => {
      addCompany(company);
      onRouteChange('home');
    })
    } else {
      this.setState({invalid: true});
    }
  }

  render() {
    const {onRouteChange} = this.props;
    const {invalid} = this.state;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem'}}> 
        <Card style={{ width : '40rem' }} >
          <Card.Title> Add Company </Card.Title>
          <Form>
            <Form.Group as={Row} controlId="formName">
              <Form.Label column sm={2}>Name</Form.Label>
              <Col sm={8}>
              <Form.Control type="name" placeholder="Name" onChange={this.onNameChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formLocation">
              <Form.Label column sm={2}>Location</Form.Label>
              <Col sm={8}>
              <Form.Control type="location" placeholder="Location" onChange={this.onLocationChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIndustry">
              <Form.Label column sm={2}>Industry</Form.Label>
              <Col sm={8}>
              <Form.Control type="industry" placeholder="Industry" onChange={this.onIndustryChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formCEO">
              <Form.Label column sm={2}>CEO</Form.Label>
              <Col sm={8}>
              <Form.Control type="CEO" placeholder="CEO" onChange={this.onCEOChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEmployees">
              <Form.Label column sm={2}>Employees</Form.Label>
              <Col sm={8}>
              <Form.Control type="employees" placeholder="Employees" onChange={this.onEmployeesChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 8, offset: 2 }}>
              { invalid && <Form.Label column style={{color: 'red'}}>Invalid inputs</Form.Label> }
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Button onClick={() => onRouteChange('home')}>Back</Button>
                <Button onClick={this.onCreate}>Create</Button>
              </div>
              
              </Col>
            </Form.Group>
              
          </Form>
        </Card>
      </div>
    )
  }
  
}

export default Create;