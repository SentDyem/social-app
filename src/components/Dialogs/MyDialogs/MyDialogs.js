import React from "react";
import DialogItem from "./DialogItem/DialogItem";
const MyDialogs = () => {
    return (
            <div>
                <DialogItem name = 'Петр Пушилин' id = '1' />
                <DialogItem name = 'Сергей Максимов' id= '2' />
                <DialogItem name = 'Андрей Михайлов' id= '3' />
                <DialogItem name = 'Виктор Михайленко' id = '4' />
            </div>
    )
}
export default MyDialogs;