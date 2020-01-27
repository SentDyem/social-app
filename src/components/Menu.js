import React from "react";
import s from './Menu.module.css';
const Menu = () =>
{
    return (
        <nav className={s.menu}>
            <div className={s.item}>
                <a href="#s">Главная</a>
            </div>
            <div className={s.item}>
                <a href="#s">Клиенты</a>
            </div>
            <div className={s.item}>
                <a href="#s">Продажи</a>
            </div>
            <div className={s.item}>
                <a href="#s">Выйти</a>
            </div>
        </nav>
    );
};
export default Menu;