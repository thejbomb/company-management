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
    const {company} = this.props;
    
    this.state = {
      id: company.id,
      name: company.name,
      location: company.location,
      industry: company.industry,
      ceo: company.ceo,
      employees: company.employees,
      invalid: false,
    }
  }

  /**
   * Saves the input change of the location
   * @param event The input change event
   */
  onLocationChange = (event) => {
    this.setState({location: event.target.value});
  }

  /**
   * Saves the input change of the industry
   * @param event The input change event
   */
  onIndustryChange = (event) => {
    this.setState({industry: event.target.value});
  }

  /**
   * Saves the input change of the ceo
   * @param event The input change event
   */
  onCEOChange = (event) => {
    this.setState({ceo: event.target.value});
  }

  /**
   * Saves the input change of the employees
   * @param event The input change event
   */
  onEmployeesChange = (event) => { 
    this.setState({employees: event.target.value});
  }

  /**
   * Saves the changes during the edit
   */
  onSave = () => {
    const {id, name, location, industry, ceo, employees} = this.state;
    const {changeCompany, onRouteChange} = this.props;

    if (name.length > 0 && location.length > 0 && industry.length > 0 && ceo.length > 0 && employees.length > 0) {
      let company = {id, name, location, industry, ceo, employees};

      fetch('http://localhost:3001/update', {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              company: company
          })
      })
      .then((res) => res.json())
      .catch(console.log)
      .then(() => {
        changeCompany(company);
        onRouteChange('home');
      }
    )
      
    } else {
      this.setState({invalid: true});
    }
  }

  render() {
    const {onRouteChange} = this.props;
    const {name, location, industry, ceo, employees, invalid} = this.state;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem'}}> 
        <Card style={{ width : '40rem' }} >
          <Card.Title> Edit Company </Card.Title>
          <Form>
            <Form.Group as={Row} controlId="formName">
              <Form.Label column sm={2}>Name</Form.Label>
              <Col sm={8}>
              <Form.Control type="name" placeholder="Name" defaultValue={name} readOnly/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formLocation">
              <Form.Label column sm={2}>Location</Form.Label>
              <Col sm={8}>
              <Form.Control type="location" placeholder="Location" defaultValue={location} onChange={this.onLocationChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formIndustry">
              <Form.Label column sm={2}>Industry</Form.Label>
              <Col sm={8}>
              <Form.Control type="industry" placeholder="Industry" defaultValue={industry} onChange={this.onIndustryChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formCEO">
              <Form.Label column sm={2}>CEO</Form.Label>
              <Col sm={8}>
              <Form.Control type="CEO" placeholder="CEO" defaultValue={ceo} onChange={this.onCEOChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEmployees">
              <Form.Label column sm={2}>Employees</Form.Label>
              <Col sm={8}>
              <Form.Control type="employees" placeholder="Employees" defaultValue={employees} onChange={this.onEmployeesChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 8, offset: 2 }}>
              { invalid && <Form.Label column style={{color: 'red'}}>Invalid inputs</Form.Label> }
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Button onClick={() => onRouteChange('home')}>Back</Button>
                <Button onClick={this.onSave}>Save</Button>
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