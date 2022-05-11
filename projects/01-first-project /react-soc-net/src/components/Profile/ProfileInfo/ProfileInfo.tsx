import s from './ProfileInfo.module.css'
import picBaner from "../../../images/Ford_Mustang_VWS-3_9cb04356-900x350.jpeg";
import avatar from "../../../images/5c5efc6db48d8.jpeg";
import React from "react";

export const ProfileInfo = () => {
    return(
        <div>
            <div className={s.contentBanner}>
                <img src={picBaner} alt='picBanner'/>
            </div>
            <div className={s.descriptionBlock}>ava + discripshen
                <img src={avatar}/>
            </div>
        </div>
    )
}