import React from "react";
import './Menu.css';
const Menu = () =>
{
    return (
        <nav className="menu">
            <div className="menu__item">
                <a href="#s">Главная</a>
            </div>
            <div className="menu__item">
                <a href="#s">Клиенты</a>
            </div>
            <div className="menu__item">
                <a href="#s">Продажи</a>
            </div>
            <div className="menu__item">
                <a href="#s">Выйти</a>
            </div>
        </nav>
    );
};
export default Menu;