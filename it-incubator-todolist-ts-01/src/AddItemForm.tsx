import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        if (error) setError(false)
    }
    const onClickAddItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }
    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && onClickAddItem()
    }
    const inputClasses = error ? "error" : ""
    return (
        <div>
            <TextField
                size={"small"}
                variant={"outlined"}
                value={title}
                color={"primary"}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressAddItem}
                className={inputClasses}
                label={"Text"}
                error={error}
                helperText={error && <div className={"error-message"}>Title is required!</div>}
            />
            <IconButton
                size={"medium"}
                color={"primary"}
                onClick={onClickAddItem}
            >
                <AddCircleOutlineIcon />
            </IconButton>
            {/*{error && <div className={"error-message"}>Title is required!</div>}*/}
        </div>
    );
}

export default AddItemForm