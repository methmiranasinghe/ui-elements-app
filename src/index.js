import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
const App = () =>{
    return(
        <div className='ui comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={pic1} alt="profile-pic"/>
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        John Hans
                    </a>
                    <div className='meta-data'>
                        <span className='date'>
                            Today at 5:08PM
                        </span>
                    </div>
                    <div className='text'>
                        It's amazing
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={pic2} alt="profile-pic"/>
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        Marry Jane
                    </a>
                    <div className='meta-data'>
                        <span className='date'>
                            Today at 7:08PM
                        </span>
                    </div>
                    <div className='text'>
                        It's Great Experience
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={pic3} alt="profile-pic"/>
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        Lorry Ganil
                    </a>
                    <div className='meta-data'>
                        <span className='date'>
                            Today at 3:08AM
                        </span>
                    </div>
                    <div className='text'>
                        It's a nice job!
                    </div>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)