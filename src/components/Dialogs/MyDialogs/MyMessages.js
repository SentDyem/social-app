import s from "../Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const MyMessages = () => {
    return (
        <div>
            <div>
                <Message message = 'Привет! Вечером перезвоню по поводу покупки...'/>
                <Message message = 'На завтра назначена встреча! Буду с нетерп...'/>
                <Message message = 'Стоимость акций компании "Бур Строй" упали...' />
                <Message message = 'Заказчики из Исландии будут кже завтра. Сообщите сотрудникам, чтобы...'/>
            </div>
        </div>
    )
}
export default MyMessages;