import {ChangeEvent, useState} from "react";

type InputPropsType = {
    setInputValue: (s: string)=> void
    inputValue: string
}

export const Input = (props:InputPropsType ) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        props.setInputValue(event.currentTarget.value)
    }

    return (
        <input value={props.inputValue} placeholder="Input.tsx" onChange={onChangeInputHandler}/>
    )
}