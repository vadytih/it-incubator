import React from "react";

type TodolistPropsType = {
    topic: string;
    arr: Array<InArrPropsType>
    remuvTask: (s: string)=>void
    filterTask:(filt: string)=> void
}

export type InArrPropsType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList = (props: TodolistPropsType) => {

    const onClickFiltrButtonHeandler = (k: string) => {
        props.filterTask(k)
    }

    return (
        <div>
            <h3>{props.topic}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.arr.map((el) => {
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
                <button onClick={()=>onClickFiltrButtonHeandler('all')}>All</button>
                <button onClick={()=>onClickFiltrButtonHeandler('active')}>Active</button>
                <button onClick={()=>onClickFiltrButtonHeandler('completed')}>Completed</button>
            </div>
        </div>
    )
}