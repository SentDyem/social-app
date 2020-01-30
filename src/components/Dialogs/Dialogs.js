import React from "react";
import s from './Dialogs.module.css';
import MyDialogs from "./MyDialogs/MyDialogs";
import MyMessages from "./MyDialogs/MyMessages";
const Dialogs = (props) =>
{
    return (
      <div className={s.dialogs}>
          <div>
             <MyDialogs />
          </div>
          <div>
              <MyMessages />
          </div>
      </div>

    );
};
export default Dialogs;