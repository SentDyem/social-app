import React from "react";
import s from './MyPosts.module.css'
import Post from "../MyPosts/Post/Post";
const MyPosts = () =>
{
    return (
        <div className={s.posts}>
            <div>
                <div className={s.textarea}>
                    <textarea name="" id="" cols="40" rows="2"></textarea>
                </div>
                <div className={s.button}>
                    <button>Добавить комментарий</button>
                </div>
                </div>
            <Post name = 'Андрей Михайлов' message = 'Сотрудничаем на рынке уже большет 10 лет, пока всё устривает' likesCount = '11'/>
            <Post name = 'Дмитрий Петрунин' message = 'Отличный парнер, будем работать дальше' likesCount ='29'/>
        </div>
    );
};
export default MyPosts;