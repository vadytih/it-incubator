import s from './MyPosts.module.css'
import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsProps = {
    statePosts: Array<PostType>
}

export const MyPosts = (props: MyPostsProps) => {

    let postsElemets = props.statePosts.map(p => {
        return  <Post  id={p.id} massage={p.message} likesCount={p.likesCount}/>
    })

    //UI
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
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