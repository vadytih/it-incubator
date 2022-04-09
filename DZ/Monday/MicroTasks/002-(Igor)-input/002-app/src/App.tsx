import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./component/FulInput";
import {Input} from "./component/Input";
import {Button} from "./component/Button";


function App() {
    let [massage, setMessage] = useState ([
        {massage: "message 1"},
        {massage: "message 2"},
        {massage: "message 3"},
    ])

    let [inputValue, setInputValue] = useState("")

    const pushMessage = (props: string) => {
        setMessage([{massage: props},...massage])
    }

    return (
        <div className="App">
            <FullInput pushMessage={pushMessage}/>
            <Input setInputValue={setInputValue} inputValue={inputValue}/>
            <Button name={"+"} pushMessage={pushMessage} setInputValue={setInputValue}/>

            {
                massage.map((t, index) => {
                    return (
                        <div key={index}>{t.massage}</div>
                    )
                })
            }
        </div>
    );
}

export default App;
