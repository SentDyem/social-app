import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () =>
{
    return (
        <div>
            <div className={s.profile}>
                <ProfileInfo name = 'Игорь Селиванов' />
                <MyPosts />
            </div>
        </div>
    );
};
export default Profile;