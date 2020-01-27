import React from "react";
import s from './Post.module.css';
const Post = () =>
{
    return (
            <div className={s.item}>
                <img src="https://www.fromdoppler.com/wp-content/themes/doppler_site/img/client-manager-hans-hatch.jpg" alt=""/>
                Сотрудничаю больше двух лет! Еще не разу не подводили.
                <span>Нравится</span>
            </div>
    );
};
export default Post;