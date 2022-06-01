import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Messages/Messag";
import {DialogsPageType} from "../../redux/state";

type DialogsProps = {
    dialogsPage:DialogsPageType
}
export const Dialogs = (props: DialogsProps) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => {
        return <DialogItem id={d.id} name={d.name}/>
    })

    let messagesElements = props.dialogsPage.messages.map(m => {
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