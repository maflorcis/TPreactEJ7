import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Persons from './components/Persons';


function App() {
  
return (
  <div className="App">
  <div className="container">
    <h1 className='display-1 text-center my-5'>Lista de empleados</h1>
    <Persons></Persons>
  </div>
</div>

);
}

export default App;
