import React from "react";
import s from './MyPosts.module.css'
import Post from "../MyPosts/Post/Post";
const MyPosts = () =>
{
    let dataPosts = [
        {id: 1, name: 'Андрей Михайлов', message: 'Сотрудничаем на рынке уже большет 10 лет, пока всё устривает', likesCount: 11 },
        {id: 2, name: 'Андрей Михайлов', message: 'Сотрудничаем на рынке уже большет 10 лет, пока всё устривает', likesCount: 11 }
    ]
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
            <Post name = {dataPosts[0].name} message = {dataPosts[0].message} likesCount = {dataPosts[0].likesCount}/>
            <Post name = {dataPosts[1].name} message = {dataPosts[1].message} likesCount ={dataPosts[1].likesCount}/>
        </div>
    );
};
export default MyPosts;