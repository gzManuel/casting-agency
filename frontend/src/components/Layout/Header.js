import { useAuth0 } from '@auth0/auth0-react';

import './Header.css';
import UserInfo from './UserInfo';

/**
 * The header of the web, shows the user information when is logged, and also can logout .
 */
const Header = () => {
    // Functions
    const { loginWithRedirect, logout } = useAuth0();

    // Variables
    const { isAuthenticated, user } = useAuth0();

    // To logout the user.
    const logoutHandler = () => {
        logout();
        localStorage.clear();
    }

    return (
        <header className='header' >
            <div className='item'>
                <h2 className='item__logo'>Casting agencies</h2>
            </div>
            {/* If is authenticated show information of the user */}
            {(isAuthenticated) && (<UserInfo name={user.name}
                picture={user.picture}
                role={localStorage.getItem('role')} />)}

            <div className='item'>
                {/* If is authenticated show information of the user */}
                {isAuthenticated ? <button onClick={logoutHandler} className='item__logout'>Logout</button> :
                    <button onClick={loginWithRedirect} className='item__login'>Login</button>}
            </div>
        </header>
    );
};

export default Header;