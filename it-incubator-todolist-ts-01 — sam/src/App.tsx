import React, {useState} from 'react';
import './App.css';
import {TodoList, InArrPropsType} from "./ToduList";
import {v1} from "";


function App() {
    const [arr, setArr] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
    ])

    let [filter, setFilter] = useState("all")
    let [copyArr, setCopyArr] = useState([...arr])

    const filterTask = (filt: string) => {
        setFilter(filt)
    }

    let filterTasks = arr

    if (filter == "active") {
        filterTasks = arr.filter(t => !t.isDone)
    }

    if (filter == "completed") {
        filterTasks = arr.filter(t => t.isDone)
    }


    const remuvTask = (id: string) => {
        let filterTasks = arr.filter(t => t.id !== id)
        setArr(filterTasks)
    }


    return (
        <div className="App">
            <TodoList topic={"What to learn"} remuvTask={remuvTask} arr={filterTasks} filterTask={filterTask}/>
        </div>
    );
}

export default App;
