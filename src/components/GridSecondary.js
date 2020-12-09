import React from 'react';
import facebookLogo from '../img/icon-facebook.svg';
import twitterLogo from '../img/icon-twitter.svg';
import instagramLogo from '../img/icon-instagram.svg';
import youtubeLogo from '../img/icon-youtube.svg';
import iconUp from '../img/icon-up.svg';
import iconDown from '../img/icon-down.svg';
import BoxGridSecondary from './BoxGridSecondary';

function GridSecondary() {
    return (
        <div className="main__grid-secondary">
            <BoxGridSecondary text="Page Views" logo={facebookLogo}numbers="87" icon={iconUp}  change="3"/>
            <BoxGridSecondary text="Likes" logo={facebookLogo} numbers="52" icon={iconDown}  change="2"/>
            <BoxGridSecondary text="Likes" logo={instagramLogo} numbers="5462" icon={iconUp}  change="2257"/>
            <BoxGridSecondary text="Profile Views" logo={instagramLogo}numbers="52K" icon={iconUp}  change="1375"/>
            <BoxGridSecondary text="Retweets" logo={twitterLogo}numbers="117" icon={iconUp}  change="303"/>
            <BoxGridSecondary text="Likes" logo={twitterLogo}numbers="507" icon={iconUp}  change="553"/>
            <BoxGridSecondary text="Likes" logo={youtubeLogo}numbers="107" icon={iconDown}  change="19"/>
            <BoxGridSecondary text="Total Views" logo={youtubeLogo}numbers="1407" icon={iconDown}  change="12"/>
        </div>
    )
}



export default GridSecondary;