import picBaner from "../images/Ford_Mustang_VWS-3_9cb04356-900x350.jpeg";
import avatar from "../images/5c5efc6db48d8.jpeg";
import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.contentBanner}>
                <img src={picBaner} alt='picBanner'/>
            </div>
            <div>ava + discripshen
                <img src={avatar}/>
            </div>
            <div>My posts
                <div>New posts</div>
                <div className='posts'>
                    <div className='item'>post1</div>
                    <div className='item'>post2</div>
                </div>
            </div>
            My content
        </div>
    )
}