import { useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthContext from '../../store/authContext';

import './Header.css';
import UserInfo from './UserInfo';
import Spinner from '../UI/Spinner';

/**
 * @todo Add code documentation
 * The the header of the web, shows the user information when is logged, and also can logout .
 */
const Header = () => {
    //This constants always are going to be reset after refresh
    //Functions
    const { loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
    //Variables
    const { isAuthenticated, isLoading, user } = useAuth0();

    //Using Context.
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        logout();
        authCtx.onLogout();
        localStorage.clear();
    }

    // Once is authenticated save user data in to localstorage and login.
    if (isAuthenticated) {
        getAccessTokenSilently().then(token => {
            localStorage.setItem('isAuthenticated', '1');
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
        });
    }

    if (isLoading) {
        //Show loading animation.
        // return (<div>Loading...</div>);
        return <Spinner/>
    }

    return (
        <header className='header' >
            <div className='item'>
                <h2 className='item__logo'>Casting agencies</h2>
            </div>

            {(authCtx.isAuthenticated || isAuthenticated) && (<UserInfo name={authCtx.isAuthenticated ? authCtx.user.name : user.name}
                picture={authCtx.isAuthenticated ? authCtx.user.picture : user.picture} />)}
            <div className='item'>
                {authCtx.isAuthenticated || isAuthenticated ? <button onClick={logoutHandler} className='item__logout'>Logout</button> :
                    <button onClick={loginWithRedirect} className='item__login'>Login</button>}
            </div>
        </header>
    );
};

export default Header;