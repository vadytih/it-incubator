import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Clicker} from "./commponents/Clicker";

function App() {
    const serverData = {
        maxCounter: 5,
        maxCounter1: 10,
        maxCounter2: 7,
        maxCounter3: 20,
        maxCounter4: 15,
    }

    return (
    <div className="App">
      <Clicker maxCounter={serverData.maxCounter}/>
      <Clicker maxCounter={serverData.maxCounter1}/>
      <Clicker maxCounter={serverData.maxCounter2}/>
      <Clicker maxCounter={serverData.maxCounter3}/>
      <Clicker maxCounter={serverData.maxCounter4}/>
    </div>
  );
}

export default App;
