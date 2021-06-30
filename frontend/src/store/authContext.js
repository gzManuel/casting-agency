import React, { useEffect, useState } from 'react';
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
 * fsdfdsf
 * @param  {boolean} isLoggedIn
 * @param  {User} user the user information
 */
const AuthContext = React.createContext({
    isLoggedIn: false,
    user: {
        name: null,
        email: null,
        picture: null,
        token: null,
        role: null,
        permissions: []
    }
});

/**
 * @todo I need to add role and permissions.
 */
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const lcIsLoggedIn = localStorage.getItem('isLoggedIn');

        if (lcIsLoggedIn === '1') {
            setIsLoggedIn(true);
            const lcUser = JSON.parse(localStorage.getItem('user'));
            const lcToken = localStorage.getItem('token');
            setUser({
                name:lcUser.name,
                email:lcUser.email,
                token:lcToken,
                picture:lcUser.picture,
                //Change this.
                role:null,
                permissions:[]
            });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                user:user
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;