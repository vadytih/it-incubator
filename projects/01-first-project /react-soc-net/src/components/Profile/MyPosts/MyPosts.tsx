import s from './MyPosts.module.css'
import React from "react";
import {Post} from "./Post/Post";
import {PostsDateType} from "../../../index";

type MyPostsPropsType = {
    postsDate: Array<PostsDateType>
}

export const MyPosts = (props: MyPostsPropsType) => {
    //BLL
    //     in index
    //BLL

    let postsElemets = props.postsDate.map(p => {
        return  <Post  id={p.id} massage={p.message} likesCount={p.likesCount}/>
    })

    //UI
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElemets}
            </div>
        </div>
    )
}