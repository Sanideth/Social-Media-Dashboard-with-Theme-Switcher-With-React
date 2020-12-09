import React from 'react';


function ThemeSwitcherButton() {
    return (
        <div className="button-container">
            <p className="button-text">Dark Mode</p>
            <button className="btn btn-theme-switcher">
                <div className="button-circle"></div>
            </button>
        </div>
    )
}


export default ThemeSwitcherButton;