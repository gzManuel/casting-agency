import { useAuth0 } from '@auth0/auth0-react';

import './Header.css';
import UserInfo from './UserInfo';
import Spinner from '../UI/Spinner';
import { useEffect } from 'react';
import useHttp from '../../hooks/useHttp';
import { getUserRole } from '../../lib/api';

/**
 * The header of the web, shows the user information when is logged, and also can logout .
 */
const Header = () => {
    // Functions
    const { loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();

    // Variables
    const { isAuthenticated, isLoading, user } = useAuth0();
    // Getting user role
    const { sendRequest, httpState } = useHttp(getUserRole)
    // Setting token in localstorage and execute getUserRole request.
    useEffect(() => {
        // If There's not "token" in local storage and is authenticated 
        if (!isSetInLocalStorage('token') && isAuthenticated) {
            // Get token and save in to local storage.
            getAccessTokenSilently().then(token => {
                localStorage.setItem('token', token);
                // Get user role
                sendRequest(token, user.sub);
            });
        }
    }, [getAccessTokenSilently, isAuthenticated, sendRequest, user]);

    // Check if an item is set in localStorage.
    const isSetInLocalStorage = (item) => {
        return localStorage.getItem(item) !== null;
    }

    // Set rol in local storage to avoid request when the page is refreshed.
    // if the status is completed and the local storage don't have the role item.
    if (httpState.status === 'completed' && !isSetInLocalStorage('role')) {
        localStorage.setItem('role', httpState.data.role);
    }

    const logoutHandler = () => {
        logout();
        localStorage.clear();
    }

    //isLoading == the user information is not loaded from auth0;
    //isAuthenticated == if the user is authenticated;
    // Show the Spinner, if the user information is not loading, or if is Authenticated and isn't set in localStorage role

    if (isLoading || (isAuthenticated && !isSetInLocalStorage('role'))) {
        return <Spinner />
    }

    return (
        <header className='header' >
            <div className='item'>
                <h2 className='item__logo'>Casting agencies</h2>
            </div>

            {(isAuthenticated) && (<UserInfo name={user.name}
                picture={user.picture} role={localStorage.getItem('role')} />)}

            <div className='item'>

                {isAuthenticated ? <button onClick={logoutHandler} className='item__logout'>Logout</button> :
                    <button onClick={loginWithRedirect} className='item__login'>Login</button>}
            </div>
        </header>
    );
};

export default Header;