import picBaner from "../images/Ford_Mustang_VWS-3_9cb04356-900x350.jpeg";
import avatar from "../images/5c5efc6db48d8.jpeg";
import React from "react";

export const Profile = () => {
    return (
        <div className='content'>
            <div className='content-banner'>
                <img src={picBaner} alt='picBanner'/>
            </div>
            <div>ava + discripshen
                <img src={avatar}/>
            </div>
            <div>My posts
                <div>New posts</div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
            My content
        </div>
    )
}