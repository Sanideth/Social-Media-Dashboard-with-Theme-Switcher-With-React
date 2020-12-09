import React from 'react';


function UserInteraction(props) {
    return(
        <div className="main__user-interaction-container">
            <p className="main__user-interaction">{props.text}</p>
            <img src={props.logo} alt="Social Media Logo" className="main__user-interaction-logo"/>
        </div>
    )
}



export default UserInteraction;