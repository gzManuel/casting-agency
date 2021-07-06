import { useAuth0 } from '@auth0/auth0-react';

import './Header.css';
import UserInfo from './UserInfo';
import Spinner from '../UI/Spinner';

/**
 * The header of the web, shows the user information when is logged, and also can logout .
 */
const Header = () => {
    //Functions
    const { loginWithRedirect, logout } = useAuth0();
    //Variables
    const { isAuthenticated, isLoading, user } = useAuth0();

    const logoutHandler = () => {
        logout();
    }

    if (isLoading) {
        // Show loading animation.
        return <Spinner />
    }

    return (
        <header className='header' >
            <div className='item'>
                <h2 className='item__logo'>Casting agencies</h2>
            </div>

            {isAuthenticated && (<UserInfo name={user.name}
                picture={user.picture} />)}

            <div className='item'>

                {isAuthenticated ? <button onClick={logoutHandler} className='item__logout'>Logout</button> :
                    <button onClick={loginWithRedirect} className='item__login'>Login</button>}
            </div>
        </header>
    );
};

export default Header;