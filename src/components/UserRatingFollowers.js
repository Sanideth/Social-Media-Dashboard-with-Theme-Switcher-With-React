import React from 'react';



function UserRatingFollowers(props) {
    return(
        <div className="main__user-rating-followers">
            <img src={props.icon} alt="" className="main__icon-arrow"/>
            <p className={`main__user-rating-per-day ${props.colorClass}`}>{props.perDay} Today</p>
        </div>
    )
}


export default UserRatingFollowers;