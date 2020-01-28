import React from "react";
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";
const Menu = () =>
{
    return (
        <nav className={s.menu}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Клиенты</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/sales" activeClassName={s.active}>Продажи</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/logout" activeClassName={s.active}>Выход</NavLink>
            </div>
        </nav>
    );
};
export default Menu;