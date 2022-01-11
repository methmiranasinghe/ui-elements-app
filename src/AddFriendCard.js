import React from "react";

const AddFriendCard = (props) =>{

    return(
        <div className='ui card'>
            <div className='content'>
                <div className='header'>User</div>
                <div className="description">
                    {props.children}
                </div>
                <div className="ui bottom button">
                <i className="fas fa-user"></i>
                &nbsp;&nbsp;Add Friend
                </div>
            </div>
        </div>
       
        // <div className="card">
            
        //     <h1>John Doe</h1>
        //     <p class="title">CEO & Founder, Example</p>
        //     <p>Harvard University</p>
        //     <a href="/"><i class="fa fa-dribbble"></i></a>
        //     <a href="/"><i class="fa fa-twitter"></i></a>
        //     <a href="/"><i class="fa fa-linkedin"></i></a>
        //     <a href="/"><i class="fa fa-facebook"></i></a>
        //     <p><button>Contact</button></p>
        // </div>
      
    )

}

export default AddFriendCard;