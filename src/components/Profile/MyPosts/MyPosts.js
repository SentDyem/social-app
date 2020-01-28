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
            <Post name = 'Андрей Михайлов' message = 'Сотрудничаем на рынке уже большет 10 лет, пока всё устриавает' likesCount = '11'/>
            <Post name = 'Дмитрий Петрунин' message = 'Отличный парнер, будем работать дальше' likesCount ='29'/>
        </div>
    );
};
export default MyPosts;