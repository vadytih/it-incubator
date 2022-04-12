import React, {KeyboardEvent,ChangeEvent, useState} from 'react';
import {FilterValuesType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    // chenchFilter: (filt: string) => void
    addTask: (message: string) => void
}

export function Todolist(props: PropsType) {

    const [filter, setFilter] = useState<string>("All")

    const chenchFilter = (filt: string) => {
        setFilter(filt)
    }

    let filterTask = props.tasks

    if (filter === "Active") {
        filterTask = props.tasks.filter(t => t.isDone)

    }
    if (filter === "Completed") {
        filterTask = props.tasks.filter(t => !t.isDone)

    }

    let [newTitle, setNewTitle] = useState('')
    console.log(newTitle)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const onClickAddButtonHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onKeyPressInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onClickAddButtonHandler()
        }
    }

    const chenchFilterHandler = (value: FilterValuesType) => {
        chenchFilter(value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onChange={onChangeInputHandler} onKeyPress={onKeyPressInputHandler}/>
            <button onClick={onClickAddButtonHandler}>+</button>
        </div>
        <ul>
            {
                filterTask.map(t => {
                    // debugger
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => props.removeTask(t.id)}>x</button>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={() => chenchFilterHandler('All')}>All</button>
            <button onClick={() => chenchFilterHandler("Active")}>Active</button>
            <button onClick={() => chenchFilterHandler('Completed')}>Completed</button>
        </div>
    </div>
}
