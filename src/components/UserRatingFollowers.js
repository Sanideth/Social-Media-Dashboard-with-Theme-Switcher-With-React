import React from 'react';



function UserRatingFollowers(props) {
    return(
        <div className="main__user-rating-followers">
            <img src={props.icon} alt="" className="main__icon-arrow"/>
            <p className="user__rating-per-day">{props.perDay} Today</p>
        </div>
    )
}


export default UserRatingFollowers;