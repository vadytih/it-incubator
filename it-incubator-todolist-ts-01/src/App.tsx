import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])


    const [filter, setFilter] = useState<string>("All")

    let filterTask = tasks

    if (filter === "Active") {
        filterTask=tasks.filter(t => t.isDone)
    }

    if (filter === "Completed") {
        filterTask=tasks.filter(t => !t.isDone)
    }

    const chenchFilter = (filt: string) => {
        setFilter(filt)
    }


    const remuveTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filterTask}
                      chenchFilter={chenchFilter}
                      remuveTask={remuveTask}/>
        </div>
    );
}

export default App;
