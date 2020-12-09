import React from 'react';


function UserFollowers(props) {
    return(
        <div className="main__user-followers">
            <p className="main__user-text-numbers">{props.text}</p>
            <p className="main__user-text-followers">FOLLOWERS</p>
        </div>
    )
}



export default UserFollowers;