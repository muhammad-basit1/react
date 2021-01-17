import './App.css';
import Dinner from './dinner.js';
import React, {useState} from 'react';


export default function App() {
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


