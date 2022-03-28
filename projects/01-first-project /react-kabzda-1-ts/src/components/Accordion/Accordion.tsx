import React from "react";


function AccordionTitle () {
    console.log("AccordionTitle - компанент отрисован")
    return (
        <h3>Меню</h3>
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


const Accordion = () => {
    console.log("Accordion - компанент отрисован")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

export default Accordion;

