import React from "react";


function AccordionTitle (props: any) {
    console.log("AccordionTitle - компанент отрисован")
    return (
        <h3>{props.title}</h3>
    )
}


function AccordionBody () {
    console.log("AccordionBody - компанент отрисован")
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    )
}


function Accordion (props: any){
    console.log("Accordion - компанент отрисован")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

export default Accordion;

