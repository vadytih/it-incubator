import React, {useState} from "react";

export const OnOff2 = () => {

    let [on, setOn] = useState <boolean>(false)

    const wrapper = {
        display: 'flex',
        padding: '10px',

    }
    const boxGreen = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'green': 'white' ,
    }

    const boxRed = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '3px',
        backgroundColor: on ? 'white': 'red' ,
    }

    const krug = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '10px',
        borderRadius: '50%',
        backgroundColor: on ? 'green': 'red',
    }

    const onClickHandler = (props: boolean) => {
        setOn(props)
        console.log(on)
    }

    return (
        <div style={wrapper}>
            <div style={boxGreen} onClick={()=>onClickHandler(true)}>On</div>
            <div style={boxRed} onClick={()=>onClickHandler(false)}>Off</div>
            <div style={krug}/>
        </div>

    )
}