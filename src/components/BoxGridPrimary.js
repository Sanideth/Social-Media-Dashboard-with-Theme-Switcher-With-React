import React from 'react';
import User from './User';
import UserFollowers from './UserFollowers';
import UserRatingFollowers from './UserRatingFollowers';


function BoxGridPrimary(props) {
    return(
        <div className="main__box-grid-primary">
            <User logo={props.logo} user={props.user}/>
            <UserFollowers text={props.text} />
            <UserRatingFollowers icon={props.icon} perDay={props.perDay} colorClass={props.colorClass}/>
        </div>
    )
}


export default BoxGridPrimary;