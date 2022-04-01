import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const Clicker = () => {
    let [a, setA] = useState(0)

    const onClickHeandler = (type: string) => {
        if(type === "plus") {
            setA(++a)
        }

        if(type === "reset") {
            setA(0)
        }
    }


    return (
        <>
            <h1>{a}</h1>
            <button onClick={()=> onClickHeandler("plus")}>++1</button>
            <button onClick={()=> onClickHeandler("reset")}>0</button>
        </>

    )
}

const App = () => {
    return (
        <div className="App">
            <Clicker/>
        </div>
    );
}

export default App;
