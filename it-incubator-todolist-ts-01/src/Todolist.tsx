import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import styles from './Todolist.module.css'
import {Button} from "./components/Button";
import {CheckBox} from "./components/CheckBox";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todoListID: string
    tasks: Array<TaskType>
    title: string
    filter: FilterValuesType

    addTask: (title: string, todoListID: string) => void
    removeTask: (taskId: string, todoListID: string) => void
    changeFilter: (value: FilterValuesType, todoListID: string) => void
    CheckBoxChange: (currentID: string, chekedValue: boolean, todoListID: string) => void
    remuveTodoList: (id: string)=>void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    const [error, setError] = useState(false)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim(), props.todoListID);
            setTitle("");
        } else {
            setError(true)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const changeFilterHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue, props.todoListID)
    }

    const onClickHandler = (tID: string) => props.removeTask(tID, props.todoListID)

    const remuveTodoList = () => {
        props.remuveTodoList(props.todoListID)
    }

    return (
        <div>
            <h3>{props.title} <button onClick={remuveTodoList}>x</button></h3>
            <div>
                <input
                    className={error ? styles.error : ''}
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>

            {error && <div className={styles.errorMessage}>Title is required</div>}

            <ul>
                {
                     props.tasks.map(t => {
                         const CheckBoxHandler = (checkedValue: boolean) => {
                             props.CheckBoxChange(t.id, checkedValue, props.todoListID)
                         }

                         return (
                             <li key={t.id}>
                                 <CheckBox isDone={t.isDone} callBack={CheckBoxHandler}/>
                                 <span>{t.title}</span>
                                 <button onClick={() => onClickHandler(t.id)}>x</button>
                             </li>
                         )
                     })
                }
            </ul>

            <div>
                <Button name={'all'} callBack={() => changeFilterHandler('all')}
                        className={props.filter === 'all' ? styles.activeFilter : ''}/>
                <Button name={'active'} callBack={() => changeFilterHandler('active')}
                        className={props.filter === 'active' ? styles.activeFilter : ''}/>
                <Button name={'completed'} callBack={() => changeFilterHandler('completed')}
                        className={props.filter === 'completed' ? styles.activeFilter : ''}/>
            </div>

        </div>
    )
}
