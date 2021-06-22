import React from 'react';
import './Main.css';

/**
 * The main component holds the more important content of this application
 */
const Main = (props) => {
    return (
        <div className='wrapper'>
            <h1 className='main__welcome'>User You're welcome</h1>
            <main className='main'>
                
                {props.children}

            </main>
        </div>
    );
};

export default Main;