import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    chengeTaskTitle: (newTitle: string) => void
}

const EditableSpan = (props: EditableSpanPropsType) => {
    let [title, setTitle] = useState(props.title)
    const [editMode, setEditMode] = useState(false)
    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        if (title.trim()) {
            setEditMode(false)
            props.chengeTaskTitle(title)
        }
    }

    const onKeyPressOffEditMode = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && offEditMode()
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <input
                value={title}
                onBlur={offEditMode}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressOffEditMode}
            />
            : <span onDoubleClick={onEditMode}>{props.title}</span>
    );
};

export default EditableSpan;