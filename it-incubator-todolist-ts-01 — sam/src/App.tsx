import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./ToduList";


function App() {
    const [arr, setArr] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
    ])

    const remuvTask = (id: number) => {
        let filterTasks = arr.filter(t => t.id !== id)
        setArr(filterTasks)
    }

    return (
        <div className="App">
            <TodoList topic={"What to learn"} arr={arr} remuvTask={remuvTask}/>
        </div>
    );
}

export default App;
