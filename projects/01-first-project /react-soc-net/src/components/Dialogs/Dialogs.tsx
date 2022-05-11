import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Messages/Messag";
import {DialogsType, MessagesType} from "../../index";

type DialogsPropsType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export const Dialogs = (props: DialogsPropsType) => {
    //BLL

    //BLL

    let dialogsElements = props.dialogs.map(d => {
        return <DialogItem id={d.id} name={d.name}/>
    })

    let messagesElements = props.messages.map(m => {
        return <Message message={m.message} id={m.id}/>
    })

    //UI
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}