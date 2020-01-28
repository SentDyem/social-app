import React from "react";
import s from './Post.module.css';
const Post = (props) =>
{
    return (
            <div className={s.item}>
                <img src="https://www.fromdoppler.com/wp-content/themes/doppler_site/img/client-manager-hans-hatch.jpg" alt=""/>
                {props.name}
                <div>
                    {props.message}
                </div>
                <div>
                    <button>Нравится</button>
                </div>
            </div>
    );
};
export default Post;