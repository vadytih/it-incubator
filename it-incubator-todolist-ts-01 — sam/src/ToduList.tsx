import React from "react";

type TodolistPropsType = {
    topic: string;
    arr: Array<InArrPropsType>
    remuvTask: Function
}

type InArrPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.topic}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.arr.map((el) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={()=>props.remuvTask(el.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}