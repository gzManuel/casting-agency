import React from 'react';
import './Header.css';

const Header = () => {
    
    return (
        <header className='header' >

            <div className='item'>
                <h2 className='item__logo'>Casting agencies</h2>
            </div>

            <div className='item-push-left'>
                <img className='item__user-image' src='https://www.latercera.com/resizer/QbgnEdZ9esJYiZwFPx1EgF-6xFA=/380x570/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/HCZX4NCJLNGQPJ4WH74GGWZZ6E.jpg' alt='naruto'/>
            </div>

            <div className='item'>
                <ul className='item__user-info'>
                    <li >
                        Name: Manuel
                    </li>
                    <li>
                        Access: Boss
                    </li>
                </ul>
            </div>

            <div className='item'>
                <button className='item__login'>Login</button>
                <button className='item__signup'>Sign up</button>
            </div>
        </header>
    );
};

export default Header;