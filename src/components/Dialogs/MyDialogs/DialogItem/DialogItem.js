import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to ={path}>
                <img src="http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png" alt=""/>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem;