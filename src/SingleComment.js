import React from "react";

const SingleComment = (props)=>{
    
    return(
        <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={props.pic} alt="profile-pic"/>
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        {props.name}
                    </a>
                    <div className='meta-data'>
                        <span className='date'>
                           {props.date}
                        </span>
                    </div>
                    <div className='text'>
                        {props.post}
                    </div>
                </div>
            </div>
    )
}

export default SingleComment;