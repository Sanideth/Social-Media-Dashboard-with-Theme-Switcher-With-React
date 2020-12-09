import React from 'react';


function ThemeSwitcherButton() {

    function buttonClick() {
        const btnCircle = document.getElementById('btn-circle');
        const btnThemeSwitcher = document.getElementById('btn-theme-switcher');
        const headingPrimary = document.getElementById('heading-primary');
        const boxGridPrimary = document.querySelectorAll('.main__box-grid-primary');
        const boxGridSecondary = document.querySelectorAll('.main__box-grid-secondary');
        const userTextNumbers = document.querySelectorAll('.main__user-text-numbers');
        const userInteractionNumbers = document.querySelectorAll('.main__user-interaction-numbers');
        
        btnCircle.classList.toggle('btn-circle-active');
        btnThemeSwitcher.classList.toggle('btn-active');
        document.body.classList.toggle('body-active');
        headingPrimary.classList.toggle('text-color-darkest');

        userTextNumbers.forEach(element => {
            element.classList.toggle('text-color-darkest');
        })

        boxGridPrimary.forEach(element => {
            element.classList.toggle('bg-color-lighten')
        })

        boxGridSecondary.forEach(element => {
            element.classList.toggle('bg-color-lighten')
        })

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