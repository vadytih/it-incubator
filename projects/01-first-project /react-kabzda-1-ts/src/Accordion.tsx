import React from "react";
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

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

