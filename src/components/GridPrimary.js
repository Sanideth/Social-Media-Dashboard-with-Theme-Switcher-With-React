import React from 'react';
import facebookLogo from '../img/icon-facebook.svg';
import twitterLogo from '../img/icon-twitter.svg';
import instagramLogo from '../img/icon-instagram.svg';
import youtubeLogo from '../img/icon-youtube.svg';
import iconUp from '../img/icon-up.svg';
import iconDown from '../img/icon-down.svg';
import BoxGridPrimary from './BoxGridPrimary';




function GridPrimary() {
    return (
        <div className="main__grid-primary">
            <BoxGridPrimary logo={facebookLogo} text="1987" icon={iconUp} perDay="12"/>
            <BoxGridPrimary logo={twitterLogo} text="1044" icon={iconUp} perDay="99"/>
            <BoxGridPrimary logo={instagramLogo}text="11k" icon={iconUp} perDay="1099"/>
            <BoxGridPrimary logo={youtubeLogo}text="8239" icon={iconDown} perDay="144"/>
        </div>
    )
}



export default GridPrimary;