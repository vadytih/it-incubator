import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div key={props.id} className={s.dialog}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    )
}