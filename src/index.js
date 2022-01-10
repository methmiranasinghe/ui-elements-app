import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import SingleComment from './SingleComment';
import AddFriendCard from './AddFriendCard';

const App = () =>{
    return(
        <div className='ui comments'>
            <AddFriendCard/>
            <SingleComment 
            name='John Hans' 
            date='1 Jan at 6.00PM' 
            post='Great Post' 
            pic={pic1}/>
            

            <SingleComment 
            name ='Marry Jane' 
            date=' 8 Jan at 8.00PM' 
            post='Nice Experience' 
            pic={pic2} />

            <SingleComment 
            name='Jane Erw' 
            date='Today at 9.00PM' 
            post="It's Amazing !" 
            pic={pic3}/>
           
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)