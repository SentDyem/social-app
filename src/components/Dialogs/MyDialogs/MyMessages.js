import s from "../Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const MyMessages = () => {
    let dataMessages = [
        {id: 1, message: 'Привет! Вечером перезвоню по поводу покупки... '},
        {id: 2, message: 'На завтра назначена встреча! Буду с нетерп...'},
        {id: 3, message: 'Стоимость акций компании "Бур Строй" упали...'},
        {id: 4, message: 'Заказчики из Исландии будут кже завтра. Сообщите сотрудникам, чтобы...'},
        {id: 5, message: 'Новая поставка материалов. Стоит ознакомиться...'},
        {id: 6, message: 'Появилась возможность расширить производство компании...'},

    ]
    return (
        <div>
            <div>
                <Message message = {dataMessages[0].message} />
                <Message message = {dataMessages[1].message} />
                <Message message = {dataMessages[2].message} />
                <Message message = {dataMessages[3].message} />
            </div>
        </div>
    )
}
export default MyMessages;