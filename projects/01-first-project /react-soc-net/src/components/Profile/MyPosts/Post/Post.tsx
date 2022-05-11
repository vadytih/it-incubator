import s from "./Post.module.css";
import avatar from "../../../../images/pic2.jpeg";
import React from "react";

type PostPropsType = {
    id:number
    massage: string
    likesCount: number
}

export const Post = (props: PostPropsType ) => {

    return (
        <div className={s.item}>
            <img src={avatar}/>
            {props.massage}
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    )
}