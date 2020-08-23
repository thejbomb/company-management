import React, {Component} from 'react';
import { 
  Card, 
  Form, 
  Col, 
  Row, 
  Button 
} from 'react-bootstrap';

class Edit extends Component {
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

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onLocationChange = (event) => {
    this.setState({location: event.target.value});
  }

  onIndustryChange = (event) => {
    this.setState({industry: event.target.value});
  }

  onCEOChange = (event) => {
    this.setState({ceo: event.target.value});
  }

  onEmployeesChange = (event) => { 
    this.setState({employees: event.target.value});
  }

  onCreate = () => {
    const {name, location, industry, ceo, employees} = this.state;
    const {addCompany, onRouteChange, id} = this.props;

    if (name.length > 0 && location.length > 0 && industry.length > 0 && ceo.length > 0 && employees.length > 0) {
      let company = {id, name, location, industry, ceo, employees};
      addCompany(company);
      onRouteChange('home');
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

export default Edit;