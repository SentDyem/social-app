import React from "react";
import DialogItem from "./DialogItem/DialogItem";
const MyDialogs = () => {
    let dataDialogs = [
        {id: 1, name: 'Петр Пушилин'},
        {id: 2, name: 'Сергей Максимов'},
        {id: 3, name: 'Андрей Михайлов'},
        {id: 4, name: 'Виктор Михайленко'},
        {id: 5, name: 'Павел Митряшев'},
        {id: 6, name: 'Анатолий Сергеев'},
    ];

    let dialogElements = dataDialogs.map(dialogs => <DialogItem name = {dialogs.name} id = {dialogs.id} />);
    return
        { dialogElements }
}
export default MyDialogs;