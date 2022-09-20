import React, { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios"
import People from './components/people';
function App() {

  const [people, SetPeople] = useState([]);

  const getUsers = async () => {
    const users = await axios.get('http://localhost:3001/employees');
    SetPeople(users.data);
  };


  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className="container">

      {people.map((item,index) => <People key={index} email={item.email} lastName={item.lastName} firstName={item.firstName} image={item.image} title={item.title}/>)}
      
      
    </div>
  );
}

export default App;
