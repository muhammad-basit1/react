import './App.css';
import Dinner from './dinner.js';
import React from 'react';


function App() {
  return (
    <div className="App">
          
     <Dinner sweets="Kitkate" groceries="Lays"/>
     <hr/>
     <Dinner sweets="Paradise" groceries="Kurleez"/>
     <hr/>
     <Dinner sweets="Now" groceries="Kurkure"/>




     
    </div>
  );
}

export default App;
