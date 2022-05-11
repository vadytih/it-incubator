import React, {FC, useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from "./App";
import AddItemForm from "./AddItemForm";

type TodoListPropsType = {
    todoListID: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTodoList: (todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList: FC<TodoListPropsType> = (props) => {
    const addTask = (title: string) => props.addTask(title, props.todoListID)

    // const onClickAddTask = () => {
    //     const trimmedTitle = title.trim()
    //     if (trimmedTitle) {
    //         props.addTask(trimmedTitle, props.todoListID)
    //     } else {
    //         setError(true)
    //     }
    //     setTitle("")
    // }


    const changeFilter = (filter: FilterValuesType): () => void => {
        return () => props.changeFilter(filter, props.todoListID)
    }

    const removeTodoList = ()=>props.removeTodoList(props.todoListID)
    const tasksListItems = props.tasks.length
        ?  props.tasks.map(t => {
            const onClickRemoveTask = () => props.removeTask(t.id, props.todoListID)
            const onChangeChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListID)

            }
            const taskClasses = t.isDone ? "is-done" : "";
            return (
                <li key={t.id}>
                    <input
                        type="checkbox"
                        checked={t.isDone}
                        onChange={onChangeChangeStatus}
                    />
                    <span className={taskClasses}>{t.title}</span>
                    <button onClick={onClickRemoveTask}>x</button>
                </li>
            )
        })
        : <span>Нет задач в списке</span>

    const allBtnClasses = props.filter === "all" ? "active-filter" : ""
    const activeBtnClasses = props.filter === "active" ? "active-filter" : ""
    const completedBtnClasses = props.filter === "completed" ? "active-filter" : ""

    return (
        <div>
            <h3>
                {props.title}
                <button onClick={removeTodoList}>x</button>
            </h3>
            <AddItemForm addItem={addTask} />
            <ul>
                {tasksListItems}
            </ul>
            <div>
                <button
                    className={allBtnClasses}
                    onClick={changeFilter("all")}>Все
                </button>
                <button
                    className={activeBtnClasses}
                    onClick={changeFilter("active")}>В работе
                </button>
                <button
                    className={completedBtnClasses}
                    onClick={changeFilter("completed")}>Выполнены
                </button>
            </div>
        </div>
    );
};

