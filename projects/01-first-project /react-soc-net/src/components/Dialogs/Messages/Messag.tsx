import s from './Mesage.module.css'

type MessagePropsType = {
    message: string
    id:number
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}