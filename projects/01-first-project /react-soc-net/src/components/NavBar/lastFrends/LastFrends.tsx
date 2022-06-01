import React from 'react';
import {DialogType} from "../../../redux/state";
import {NavLink} from "react-router-dom";


type LastFrendsProps = {
    lastFrend: Array<DialogType>
}

export const LastFrends = (props: LastFrendsProps) => {

    let renderLastFrend = () => {
        return props.lastFrend.map(t => {
            console.log(t.avatar)
            return (
                <NavLink key={t.id} to={`/dialogs/${t.id}`}>
                    <div><img src={t.avatar} alt={`avatar ${t.name}`}/></div>
                    t.name
                </NavLink>
            )
        })
    }

    return (
        <div>
            {renderLastFrend()}
        </div>
    );
};
