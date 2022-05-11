import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDateType} from "../../index";

type ProfilePropsType = {
    postsDate: Array<PostsDateType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsDate={props.postsDate}/>
        </div>
    )
}