import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './Header.css';
import UserInfo from './UserInfo';

/**
 * @todo Add code documentation
 * The the header of the web, shows the user information when is logged, and also can logout .
 */
const Header = () => {
    //This constants always are going to be reset after refresh
    const { loginWithRedirect , logout, getAccessTokenSilently } = useAuth0();
    const { isAuthenticated, isLoading, user } = useAuth0();

    const [name, setName] = useState();
    const [picture, setPicture] = useState();
    const [authenticated, setAuthenticated] = useState();

    const setLocalStoreHandler = (token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    }

    const onLogoutHandler = () => {
        logout();
        localStorage.clear();
    }
    

    useEffect(() => {
        //Checking if there're data saving in localstorage.
        if (localStorage.length !== 0) {
            
            //Transforming String to object
            const user = JSON.parse(localStorage.getItem('user'));
            //Setting the Name picture and authenticated
            setName(user.name);
            setPicture(user.picture);
            setAuthenticated(true);
        }
    }, []);

    if(isAuthenticated){
        getAccessTokenSilently().then(token=>setLocalStoreHandler(token)); 
    }

    if (isLoading) {
        //Show loading animation.
        return (<div>Loading...</div>);
    }
 
    return (
        <header className='header' >

            <div className='item'>
                <h2 className='item__logo'>Casting agencies</h2>
            </div>

            {(authenticated||isAuthenticated) && (<UserInfo name={authenticated? name:user.name } picture={authenticated?picture:user.picture} />)}

            <div className='item'>
                {authenticated ||isAuthenticated ? <button onClick={onLogoutHandler} className='item__logout'>Logout</button> :
                    <button onClick={loginWithRedirect} className='item__login'>Login</button>}
            </div>
        </header>
    );
};

export default Header;