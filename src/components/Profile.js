import React from "react";
import s from './Profile.module.css';
const Profile = () =>
{
    return (
        <div className={s.profile}>
            <div>
                image
            </div>
            <div>
                profile + description
            </div>
            <div className={s.products}>
                product
                <div className={s.item}>
                    products information
                </div>
                <div className={s.item}>
                    comment
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};
export default Profile;