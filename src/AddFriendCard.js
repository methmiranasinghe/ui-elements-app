import React from "react";

const AddFriendCard = () =>{
    return(
        <div className='ui card'>
            <div className='content'>
                <div className='header'>Hans Pinil</div>
                <div className="description">
                    Hello My name is Hans Pinil. I live in Colombo.
                </div>
                <div className="ui bottom button">
                <i class="fas fa-user"></i>
                &nbsp;&nbsp;Add Friend
                </div>
            </div>
        </div>
    )

}

export default AddFriendCard;