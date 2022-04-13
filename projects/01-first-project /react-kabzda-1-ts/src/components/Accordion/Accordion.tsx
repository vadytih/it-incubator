import React from "react";

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle - компанент отрисован")
    return (
        <h3>{props.title}</h3>
    )
}


function AccordionBody() {
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

type AccordionPropsType = {
    titleValue: string
    collapse: boolean
}

// export const Accordion = (props: AccordionPropsType) => {
//     console.log("Accordion - компанент отрисован")
//
//     if (props.collapse === true) {
//
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     }
//
// }

export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion - компанент отрисован")

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapse && <AccordionBody/>}
        </div>
    )


}


