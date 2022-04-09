import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./component/FulInput";


function App() {
    let [massage, setMessage] = useState ([
        {massage: "message 1"},
        {massage: "message 2"},
        {massage: "message 3"},
    ])

    const pushMessage = (props: string) => {
        setMessage([{massage: props},...massage])
    }

    return (
        <div className="App">
            <FullInput pushMessage={pushMessage}/>
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
