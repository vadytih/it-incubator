import React from "react";

export const User = () => {

    const deleteUser = () => {
        alert('user have been deleted')
    }

    const saveUser = () => {
        alert('user have been saved')
    }


    return (
        <>
            <div>Vadim</div>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </>
    )
}