import React from "react";
import {Buttons} from "./Buttons";

type BodyPropsType ={
    studentsTitle: string
    autoListTitle: string
    studentsList: Array<SudentObj>
    autoList: Array<AutoObj>

}

type SudentObj = {
    id: number
    name: string
    age: number

}

type AutoObj = {
    manufacturer: string
    model: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <>
            <h2>{props.studentsTitle}</h2>
            {
                props.studentsList.map((obj,index) => {
                    return (
                        <ul>
                            <li key={index}>{obj.id} {obj.name} {obj.age}</li>
                        </ul>
                    )
                })
            }

            <h2>{props.autoListTitle}</h2>

            {
                props.autoList.map((obj, index)=>{
                    return(
                        <ul>
                            <li key={index}>{obj.manufacturer} {obj.model}</li>
                        </ul>
                    )
                })
            }

            <h3>Button</h3>
            <Buttons name={"1"}/>
            <Buttons name={"2"}/>
        </>
    )
}