import React from 'react';
import HeadingPrimary from './HeadingPrimary';
import ThemeSwitcherButton from './ThemeSwitcherButton'


function Header() {
    return (
        <header className="header u-mb-m">
            <div className="header__text-container">
                <HeadingPrimary/>
                <p className="header__text">Total Followers: 23,004</p>
            </div>
            <ThemeSwitcherButton/>
        </header>
    )
}


export default Header;