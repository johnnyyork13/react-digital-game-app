import './styles/App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useParams } from 'react-router-dom';

//component imports
import Nav from './Nav';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Featured from './Featured';

function App() {

  const key = "6edf5284267f4b93812855603bb5435a";
  const cartHistory = useLocation();
  // const page = useParams();
  // console.log("PAGE", page);

  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Hero />
      <Featured /> 
    </div>
  )
}

export default App
