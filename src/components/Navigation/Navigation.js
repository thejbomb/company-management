import React from 'react';
import {
  Button,
  Form,
  FormControl,
  Navbar,
  Nav
} from 'react-bootstrap';

const Navigation = () => {
  return (
    <div className="" >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Company Management App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;