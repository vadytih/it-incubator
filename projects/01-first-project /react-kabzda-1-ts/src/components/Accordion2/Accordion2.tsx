import React, {useState} from "react";

type AccordionTitlePropsType2 = {
    title: string
}

function AccordionTitle2(props: AccordionTitlePropsType2) {
    console.log("AccordionTitle 2 - компанент отрисован")
    return (
        <h3>{props.title}</h3>
    )
}


function AccordionBody2() {
    console.log("AccordionBody 2 - компанент отрисован")
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    )
}

type AccordionPropsType2 = {
    titleValue: string
    collapse: boolean
}



export const Accordion2 = (props: AccordionPropsType2) => {
    console.log("Accordion 2 - компанент отрисован")

    let [menuOn, setMenuOn] = useState(props.collapse)

    const onClickHandler = () => {
        menuOn ? setMenuOn(false): setMenuOn(true)
        console.log(menuOn)
    }

    return (
        <div>
            <AccordionTitle2 title={props.titleValue}/>
            <button onClick={onClickHandler}>{!menuOn ? "close X" : "open"}</button>
            { !menuOn && <AccordionBody2/>}
        </div>
    )


}


