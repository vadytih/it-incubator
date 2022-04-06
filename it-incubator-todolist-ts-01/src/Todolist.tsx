import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    remuveTask: (id: number) => void
    chenchFilter: (filt: string) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    debugger
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                            <button onClick={() => props.remuveTask(t.id)}>x</button>
                        </li>

                    )
                })
            }
        </ul>
        <div>
            <button onClick={() => props.chenchFilter('All')}>All</button>
            <button onClick={() => props.chenchFilter("Active")}>Active</button>
            <button onClick={() => props.chenchFilter('Completed')}>Completed</button>
        </div>
    </div>
}
