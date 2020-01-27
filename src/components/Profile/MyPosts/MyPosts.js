import React from "react";
import s from './MyPosts.module.css'
import Post from "../MyPosts/Post/Post";
const MyPosts = () =>
{
    return (
        <div>
            <div>
            <textarea name="" id="" cols="40" rows="2"></textarea>
                <button>Добавить комментарий</button>
                </div>
            <Post />
        </div>
    );
};
export default MyPosts;