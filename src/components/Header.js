import React from "react";
import s from './Header.module.css';
const Header = () =>
{
    return (
        <header className={s.header}>
                <img className={s.logo} src="https://cdn.builtinchicago.org/sites/www.builtinchicago.org/files/video_thumbnails/ZlLmIHa6Kew.jpg" alt=""/>
        </header>
    );
};
export default Header;