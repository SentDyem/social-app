import React from "react";
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";
const Menu = () =>
{
    return (
        <nav className={s.menu}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Профиль
                    <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/19339625881548233621-256.png" alt=""/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Клиенты
                    <img src="https://cdn.iconscout.com/icon/free/png-256/clients-1626079-1520674.png" alt=""/>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/sales" activeClassName={s.active}>Продажи</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/ " activeClassName={s.active}>Выход</NavLink>
            </div>
        </nav>
    );
};
export default Menu;