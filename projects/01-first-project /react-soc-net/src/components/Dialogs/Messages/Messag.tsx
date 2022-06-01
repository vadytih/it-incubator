import s from './Mesage.module.css'

type MessagePropsType = {
    message: string
    id:number
}

export const Message = (props: MessagePropsType) => {
    return (
        <div key={props.id} className={s.message}>{props.message}</div>
    )
}