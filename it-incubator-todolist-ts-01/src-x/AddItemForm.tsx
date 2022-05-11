import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from "./Todolist.module.css";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm = (props: AddItemFormPropsType) => {
    let [title, setTitle] = useState("")
    const [error, setError] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }

    const onClickAddItem = () => {
        if (title.trim() !== '') {
            props.addItem( title.trim());
            setTitle("");
        } else {
            setError(true)
        }
    }

    const onKeyPressAddItem= (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onClickAddItem();
        }
    }
    return (
        <div>
            <div>
                <input
                    className={error ? styles.error : ''}
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressAddItem}
                />
                <button onClick={onClickAddItem}>+</button>
            </div>

            {error && <div className={styles.errorMessage}>Title is required</div>}
        </div>
    );
};

export default AddItemForm;