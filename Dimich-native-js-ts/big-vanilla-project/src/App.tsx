import React from 'react';
import './App.css';
import {User} from "./05/06-callbacks";

const allStyle = {
    // width:'500px',
    display: 'flex',
    justifyContent: 'center',
}

function App() {
    return (
        <div style={allStyle}>
            <User/>
        </div>
    );
}

export default App;
