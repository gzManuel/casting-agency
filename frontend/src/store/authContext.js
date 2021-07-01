import React, { useCallback, useEffect, useState } from 'react';
/**
 * @typedef User
 * @property {string} name 
 * @property {string} email
 * @property {string} picture
 * @property {string} token
 * @property {string} role
 * @property {string[]} permissions
 */

/**
 * 
 * @param  {boolean} isLoggedIn
 * @param  {User} user the user information
 * @param {function} onLogin
 * @param {function} onLogout
 */
const AuthContext = React.createContext({
    isAuthenticated: false,
    user: {
        name: null,
        email: null,
        picture: null,
        token: null,
        role: null,
        permissions: []
    },
    onLogin: () => { },
    onLogout: () => { }
});

/**
 * @todo I need to add role and permissions.
 */
export const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    
    const loginHandler = useCallback(() => {
        // const lcIsAuthenticated = localStorage.getItem('isAuthenticated');

        setIsAuthenticated(true);
        const lcUser = JSON.parse(localStorage.getItem('user'));
        const lcToken = localStorage.getItem('token');
        setUser({
            name: lcUser.name,
            email: lcUser.email,
            token: lcToken,
            picture: lcUser.picture,
            //Change this.
            role: null,
            permissions: []
        });
    }, []);

    useEffect(() => {
        const lcIsAuthenticated = localStorage.getItem('isAuthenticated');
        if (lcIsAuthenticated === '1') {
            loginHandler();
        }
    }, [loginHandler]);

    const logoutHandler = () => {
        // const lcIsAuthenticated = localStorage.getItem('isAuthenticated');

        setIsAuthenticated(false);
        setUser({});
    }



    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: isAuthenticated,
                user: user,
                onLogin: loginHandler,
                onLogout: logoutHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;