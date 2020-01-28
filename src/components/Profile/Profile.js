import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Image from "./Image/ProfileImage";
import ProfileName from "./ProfileName/ProfileName";
const Profile = () =>
{
    return (
        <div>
            <div className={s.profile}>
                <Image />
                <ProfileName name = 'Игорь Мешков'/>
                <MyPosts />
            </div>
        </div>
    );
};
export default Profile;