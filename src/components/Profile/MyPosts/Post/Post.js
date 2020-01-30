import React from "react";
import s from './Post.module.css';
const Post = (props) =>
{
    return (
            <div className={s.item}>
                <img src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png" alt=""/>
                <div>
                    Пользователь - {props.name}
                </div>
                <div>
                    {props.message}
                </div>
                <div>
                    <button>Мне нравится {props.likesCount}</button>
                </div>
            </div>
    );
};
export default Post;