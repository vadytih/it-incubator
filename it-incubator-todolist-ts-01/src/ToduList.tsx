import React from "react";

type TodolistPropsType = {
    topic1?: string;
    topic2?: string;
    arr: Array<InArrPropsType>
}

type InArrPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.topic1}{props.topic2}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.arr.map((el) => {
                    return (
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}
                {/*<li><input type="checkbox" checked={true}/> <span>{props.arr[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={true}/> <span>{props.arr[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={false}/> <span>{props.arr[2].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={false}/> <span>{props.arr[2].title}</span></li>*/}

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}