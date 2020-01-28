import React from "react";
import s from './Menu.module.css';
const Menu = () =>
{
    return (
        <nav className={s.menu}>
            <div className={s.item}>
                <a href="/profile">Профиль</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs">Клиенты</a>
            </div>
            <div className={s.item}>
                <a href="/sales">Продажи</a>
            </div>
            <div className={s.item}>
                <a href="/logout">Выход</a>
            </div>
        </nav>
    );
};
export default Menu;