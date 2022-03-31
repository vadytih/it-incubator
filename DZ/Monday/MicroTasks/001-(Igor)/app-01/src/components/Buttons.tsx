import React from "react";

type buttonType = {
    name: string
}

const RenderButtos = (props: buttonType) => {
    const foo1 = () => {
        console.log(100200 + " foo1")
    }

    const foo2 = (mess: number) => {
        console.log(mess + " foo2")
    }

    if (props.name == "1") {
        return <button onClick={foo1}>{props.name}</button>
    } else if (props.name == "2") {
        return <button onClick={() => foo2(100200)}>{props.name}</button>
    }

    return <button>{props.name}</button>
}

export const Buttons = (props: buttonType) => {

    return <RenderButtos name={props.name}/>;

}
