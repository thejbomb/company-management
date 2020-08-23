import React from 'react';
import './Home.css';
import {Button} from 'react-bootstrap';

const Home = ({companies, deleteCompany, onRouteChange, editCompany}) => {

  let caption = ['ID', 'NAME', 'LOCATION', 'INDUSTRY', 'CEO', 'EMPLOYEES', 'OPTIONS'];

  let header = caption.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  })

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
        <td className='options'>
          <Button onClick={() => editCompany(company)}>Edit</Button>
          <Button onClick={() => deleteCompany(id)}>Delete</Button>
        </td>
      </tr>
    )
  });

  return (
    <div>
      <h1 id='title'>Company List</h1>
      <table id='companies'>
        <tbody>
          <tr>{header}</tr>
          {tableData}
        </tbody>
      </table>
      <Button id='add' onClick={() => onRouteChange('create')}>Add Company</Button>
    </div>
  );
}

export default Home;