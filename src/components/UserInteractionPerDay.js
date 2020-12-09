import React from 'react';



function UserInteractionPerDay(props) {
    return(
        <div className="main__user-interaction-per-day-container">
            <p className="main__user-interaction-numbers">{props.numbers}</p>
            <div className="main__user-interaction-change-container">
                <img src={props.icon} alt="Percentage Change Icon" className="main__user-interaction-change-icon"/>
                <p className={`main__user-interaction-change-text ${props.colorClass}`}>{props.change}%</p>
            </div>
        </div>
    )
}


export default UserInteractionPerDay;