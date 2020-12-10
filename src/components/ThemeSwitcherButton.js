import React from 'react';


function ThemeSwitcherButton() {

    function buttonClick() {
        // variabled for DOM elements
        const btnCircle = document.getElementById('btn-circle');
        const btnThemeSwitcher = document.getElementById('btn-theme-switcher');
        const headingPrimary = document.getElementById('heading-primary');
        const boxGridPrimary = document.querySelectorAll('.main__box-grid-primary');
        const boxGridSecondary = document.querySelectorAll('.main__box-grid-secondary');
        const userTextNumbers = document.querySelectorAll('.main__user-text-numbers');
        const userInteractionNumbers = document.querySelectorAll('.main__user-interaction-numbers');

        //Theme Switcher Button active state style change
        btnCircle.classList.toggle('btn-circle-active');
        btnThemeSwitcher.classList.toggle('btn-active');

        // Body style change on active state
        document.body.classList.toggle('body-active');

        // H1 style change on active state
        headingPrimary.classList.toggle('text-color-darkest');

        // Text style change on active state
        userTextNumbers.forEach(element => {
            element.classList.toggle('text-color-darkest');
        })
        // Grid box style change on active state
        boxGridPrimary.forEach(element => {
            element.classList.toggle('bg-color-lighten');
            element.classList.toggle('box-active');
        })

        boxGridSecondary.forEach(element => {
            element.classList.toggle('bg-color-lighten');
            element.classList.toggle('box-active');
        })

        //Secondary text style change on active
        userInteractionNumbers.forEach(element => {
            element.classList.toggle('text-color-darkest');
        })
    
    }
    return (
        <div className="button-container">
            <p className="button-text">Dark Mode</p>
            <button className="btn btn-theme-switcher" id="btn-theme-switcher" onClick={buttonClick}>
                <div className="btn-circle" id="btn-circle"></div>
            </button>
        </div>
    )
}


export default ThemeSwitcherButton;