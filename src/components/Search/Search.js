import React from 'react';
import {
  Card,
  ListGroup,
} from 'react-bootstrap';

const Search = ({company}) => {
  const {name, location, industry, ceo, employees} = company;

  return(
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem'}}> 
        <Card style={{ width : '40rem' }} >
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <ListGroup>
                <ListGroup.Item>Location: {location}</ListGroup.Item>
                <ListGroup.Item>Industry: {industry}</ListGroup.Item>
                <ListGroup.Item>CEO: {ceo}</ListGroup.Item>
                <ListGroup.Item>Employees: {employees}</ListGroup.Item>
              </ListGroup>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Search;
