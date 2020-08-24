import React from 'react';
import { 
  Card, 
  Form, 
  Col, 
  Row, 
  Button 
} from 'react-bootstrap';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    }
  }

  /**
   * Saves the input change of the name to state
   * @param event The input change event
   */
  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  /**
   * Saves the input change of the email to state
   * @param event The input change event
   */
  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  /**
   * Saves the input change of the password to state
   * @param event The input change event
   */
  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  /**
   * Sends a resgister post request to the server to create a new company dataset in the database
   */
  onRegister = () => {
    const {email, password} = this.state;
    if (email.includes('@') && email.includes('.') && password.length > 0) 
    {
      fetch('http://localhost:3001/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
        })
      })
      .then((res) => res.json())
      .catch(console.log)
      .then((email) => {
        if (email !== undefined) {
          this.props.loadUser(email);
          this.props.onRouteChange('home');
        }
      })
    } else {
      this.setState({invalid: true});
    }
  }

  render() {
    const {invalid} = this.state;
    const {onRouteChange} = this.props;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem'}}>
        <Card style={{ width : '35rem' }}>
          <Card.Title> Register </Card.Title>
          <Form>
            <Form.Group as={Row} controlId="formEmail">
              <Form.Label column sm={2}>Email</Form.Label>
              <Col sm={8}>
              <Form.Control type="email" placeholder="Email" onChange={this.onEmailChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPassword">
              <Form.Label column sm={2}>Password</Form.Label>
              <Col sm={8}>
              <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 8, offset: 2 }}>
              { invalid && <Form.Label column style={{color: 'red'}}>Please fill in everything with valid inputs</Form.Label> }
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Button onClick={() => onRouteChange('signin')}>Sign In</Button>
                    <Button onClick={this.onRegister}>Register</Button>
                </div>
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Registration;