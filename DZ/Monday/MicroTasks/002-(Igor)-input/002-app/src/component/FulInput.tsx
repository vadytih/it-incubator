import React, {ChangeEvent, useState} from "react";

type FulInputPropsType = {
    pushMessage: (s: string) => void
}

export const FullInput = (props: FulInputPropsType) => {
    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }


    const onClickButtonHandler = () => {
        props.pushMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} id="inputMessage"/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}