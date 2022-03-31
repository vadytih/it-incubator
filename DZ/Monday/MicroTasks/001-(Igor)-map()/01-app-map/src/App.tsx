import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./Task-filter";


const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]



function App() {
  return (
    <div className="App">
      <NewComponent arr={topCars}/>
    </div>
  );
}

export default App;
