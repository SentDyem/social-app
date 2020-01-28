import s from "./ProfileImage.module.css";
import React from "react";
const Image = (props) =>
{
    return (
        <div className={s.image}>
            {props.name}
            <img src="https://www.itweek.ru/etc/kyocera-svistunov-1.jpg" alt=""/>
        </div>
    )
};
export default Image;

