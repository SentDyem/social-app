import React from "react";
import s from './Ads.module.css'
const Ads = () =>
{
    return (
        <div className={s.ads}>
            ADS
            <img className={s.logo} src="https://www.adaware.com/sites/default/files/inline-images/adblock_screen_0.png" alt=""/>
        </div>
    );
};
export default Ads;