import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import data from "./mock-data.json"

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
