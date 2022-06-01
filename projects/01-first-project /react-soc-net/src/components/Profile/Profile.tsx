import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileProps = {
    profilePage: ProfilePageType
}

export const Profile = (props: ProfileProps) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts statePosts={props.profilePage.posts}/>
        </div>
    )
}