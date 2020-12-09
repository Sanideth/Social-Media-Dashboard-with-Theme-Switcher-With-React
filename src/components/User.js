import React from 'react';




function User(props) {
    return(
        <div className="main__user-container">
            <img src={props.logo} alt="Facebook Logo" className="main__user-social-media-logo"/>
            <p className="main__user-username">@nathanf</p>
            
        </div>
    )
}


export default User;