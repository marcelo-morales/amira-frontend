import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import data from "./mock-data.json";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';

import greencircle from './images/green-circle.png';
import redcircle from './images/red-circle.png';
import graycircle from './images/gray-circle.png';
import yellowcircle from './images/yellow-circle.png';


const App = () => {


  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    sentence:'',
    error:"",
    sc:'',
    skip:'',
    mp:''
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      fullName: addFormData.fullName,
      address: addFormData.phoneNumber,
      email: addFormData.email,
    }
  }

  return <div className="app-container">

    <h2>Scoring Student Name Assessment</h2>

    <h2>Accuracy: 95%</h2>

    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Story" />
      <FormControlLabel disabled control={<Switch />} label="Running Record" />
    </FormGroup>

   
    <Stack spacing={2} direction="row">
<Button variant="contained">Saved</Button>
</Stack>

<Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={greencircle} /> 
      <h2>Correct</h2>
      
      <Avatar alt="Remy Sharp" src={redcircle} /> 
      <h2>Incorrect</h2>

      <Avatar alt="Remy Sharp" src={graycircle} /> 
      <h2>Not read</h2>

      <Avatar alt="Remy Sharp" src={yellowcircle} /> 
      <h2>Flagged</h2>

</Stack>

<Stack spacing={2} direction="row">
      <Button onClick={() => {
    alert('clicked');
  }} variant="outlined">Types of Errors</Button>
      <Button variant="outlined">Scores</Button>
</Stack>

<h2>Word</h2>

<h2>Automated Skip Error</h2>

<h2>Edit Manually</h2>
<Stack spacing={2} direction="row">
  <Button variant="outlined" href="#outlined-buttons">
    Substitutions
  </Button>
  <Button variant="outlined" href="#outlined-buttons">
    Repetitions
  </Button>
  <Button variant="outlined" href="#outlined-buttons">
    Additions & Self-Corrections
  </Button>
  <Button variant="outlined" href="#outlined-buttons">
    Skips
  </Button>
  <Button variant="outlined" href="#outlined-buttons">
    Reversals
  </Button>
  <Button variant="outlined" href="#outlined-buttons">
    Long Silence
  </Button>
  <Button variant="outlined" href="#outlined-buttons">
    Unrelated chatter
  </Button>
</Stack>


    <table>
      <thead>
        <tr>
          <th>Page</th>
          <th>Sentence</th>
          <th>E</th>
          <th>S-C</th>
          <th>Skip</th>
          <th>M-P</th>
     
        </tr>
      </thead>
      
      <tbody>
        {contacts.map((contact) => (
        <tr>
              <td>{contact.id}</td>
              <td>{contact.sentence}</td>
              <td>{contact.error}</td>
              <td>{contact.sc}</td>
              <td>{contact.skip}</td>
              <td>{contact.mp}</td>
        </tr>
        ))}
      </tbody>
    </table>


  </div>
 
  
}

export default App;
