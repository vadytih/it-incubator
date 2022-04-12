import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid"

export type FilterValuesType = "All" | "Active" | "Completed";

function App() {

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false}
    ])

    const addTask = (message: string) => {
        let newTask = {id: v1(), title: message, isDone: false}
        setTasks([newTask, ...tasks])

        console.log([newTask, ...tasks])
    }

    // const [filter, setFilter] = useState<string>("All")
    //
    // const chenchFilter = (filt: string) => {
    //     setFilter(filt)
    // }
    //
    // let filterTask = tasks
    //
    // if (filter === "Active") {
    //     filterTask = tasks.filter(t => t.isDone)
    //
    // }
    // if (filter === "Completed") {
    //     filterTask = tasks.filter(t => !t.isDone)
    //
    // }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      // chenchFilter={chenchFilter}
                      removeTask={removeTask}
                      addTask={addTask}/>

        </div>
    );
}

export default App;
