import s from "./ProfileInfo.module.css";
import React from "react";
const Image = (props) =>
{
    return (
        <div className={s.image}>
            <img src="https://www.itweek.ru/etc/kyocera-svistunov-1.jpg" alt=""/>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    )
};
export default Image;

