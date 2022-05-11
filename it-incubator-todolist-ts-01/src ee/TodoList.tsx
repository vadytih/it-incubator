import React, {FC, useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from "./App";
import AddItemForm from "./AddItemForm";
import {Button, ButtonGroup, IconButton, List, ListItem} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CancelIcon from '@material-ui/icons/Cancel';

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

    const changeFilter = (filter: FilterValuesType): () => void => {
        return () => props.changeFilter(filter, props.todoListID)
    }

    const removeTodoList = () => props.removeTodoList(props.todoListID)
    const tasksListItems = props.tasks.length
        ? props.tasks.map(t => {
            const onClickRemoveTask = () => props.removeTask(t.id, props.todoListID)
            const onChangeChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListID)

            }
            const taskClasses = t.isDone ? "is-done" : "";
            return (
                <ListItem
                    style={{padding:0}}
                    key={t.id}>
                    <input
                        type="checkbox"
                        checked={t.isDone}
                        onChange={onChangeChangeStatus}
                    />
                    <span className={taskClasses}>{t.title}</span>
                    <IconButton size={"small"} onClick={onClickRemoveTask}>
                        <DeleteOutlineIcon fontSize="small"/>
                    </IconButton>
                </ListItem>
            )
        })
        : <span>Нет задач в списке</span>

    const allBtnColor = props.filter === "all" ? "secondary" : "primary"
    const activeBtnColor = props.filter === "active" ? "secondary" : "primary"
    const completedBtnColor = props.filter === "completed" ? "secondary" : "primary"

    return (
        <div>
            <h3>
                {props.title}
                <IconButton size={"small"} onClick={removeTodoList}>
                    <CancelIcon fontSize={"small"}/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <List>
                {tasksListItems}
            </List>
            <div>
                <ButtonGroup
                    disableElevation
                    size={"small"}
                    variant={"contained"}
                >
                    <Button
                        color={allBtnColor}
                        onClick={changeFilter("all")}>Все
                    </Button>
                    <Button
                        color={activeBtnColor}
                        onClick={changeFilter("active")}>В работе
                    </Button>
                    <Button
                        color={completedBtnColor}
                        onClick={changeFilter("completed")}>Выполнены
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

