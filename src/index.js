import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';

const App = () =>{
    return(
        <div className='ui comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img  alt="profile-pic"/>
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        Sarah
                    </a>
                    <div className='meta-data'>
                        <span className='date'>
                            Today at 5:08PM
                        </span>
                    </div>
                    <div className='text'>
                        it's amazing
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