import React from 'react';
import UserInteraction from './UserInteraction';
import UserInteractionPerDay from './UserInteractionPerDay';


function BoxGridSecondary(props) {
    return (
        <div className="main__box-grid-secondary">
            <UserInteraction text={props.text} logo={props.logo} />
            <UserInteractionPerDay numbers={props.numbers} icon={props.icon} change={props.change} colorClass={props.colorClass}/>
        </div>
    )
}



export default BoxGridSecondary;