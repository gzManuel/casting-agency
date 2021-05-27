import React from 'react';
import NavigationBar from './NavigationBar';
import './Main.css';

const Main = (props) => {
    return (
        <div className='wrapper'>
            <h1 className='main__welcome'>User You're welcome</h1>
            <main className='main'>
                <NavigationBar />
                {props.children}

            </main>
        </div>
    );
};

export default Main;