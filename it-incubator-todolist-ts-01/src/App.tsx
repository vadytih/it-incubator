import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasskStateType = {
    [todoListID: string]: Array<TaskType>
}

function App() {
    const todoListID_1 = v1()
    const todoListID_2 = v1()

    const [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todoListID_1, title: 'What to learn', filter: 'all'},
        {id: todoListID_2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TasskStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: true},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todoListID_2]: [
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Chees", isDone: true},
            {id: v1(), title: "Cheeps", isDone: true},
            {id: v1(), title: "Toilet paper", isDone: false},
        ],
    })


    const removeTask = (id: string, todoListID: string) => {
        setTasks({...tasks, [todoListID]: tasks[todoListID].filter(t => t.id !== id)})
    }
    const addTask = (title: string, todoListID: string) => {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListID]: [task, ...tasks[todoListID]]})

    }
    const CheckBoxChange = (currentID: string, checkedValue: boolean, todoListID: string) => {
        setTasks({
            ...tasks,
            [todoListID]: tasks[todoListID].map(t => t.id === currentID ? {...t, isDone: checkedValue} : t)
        })


    }
    const changeFilter = (value: FilterValuesType, todoListID: string) => {
        setTodoLists(todoLists.map(tl => tl.id === todoListID ? {...tl, filter: value} : tl))
    }

    const remuveTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(tl => tl.id !== todoListID))
        delete tasks[todoListID]
    }


    const todoListFoRender = todoLists.map(tl => {
        let taskListForTodoList = tasks[tl.id] // весь массив

        if (tl.filter === 'active') {
            taskListForTodoList = taskListForTodoList.filter(f => !f.isDone) // f.isDone === false
        }
        if (tl.filter === 'completed') {
            taskListForTodoList = taskListForTodoList.filter(f => f.isDone) //f.isDone === true
        }
        return (
            <Todolist
                key={tl.id}
                todoListID={tl.id}
                tasks={taskListForTodoList}
                title={tl.title}
                filter={tl.filter}

                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                CheckBoxChange={CheckBoxChange}
                remuveTodoList={remuveTodoList}
            />
        )
    })


    return (
        <div className="App">
            {todoListFoRender}
        </div>
    );
}

export default App;
