import React from 'react';
import './Home.css';
import {Button} from 'react-bootstrap';

const Home = ({companies}) => {

  
  let tableData = companies.map((company, index) => {
    const {id, name, location, industry, ceo, employees} = company;
    return(
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{location}</td>
        <td>{industry}</td>
        <td>{ceo}</td>
        <td>{employees}</td>
        <div className='options'>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
        
      </tr>
    )
  });

  return (
    <div>
      <h1 id='title'>Company List</h1>
      <table id='companies'>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );
}

export default Home;