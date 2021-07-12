import { Fragment } from "react";
import { useAuth0 } from '@auth0/auth0-react';

import './Layout.css';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Main from "./Main";
/**
 * The Layout of the application, all the inside components will be showed in the main component.
 * @param {object} props
 * @param {boolean} props.onShowInformation
 * @param {any} props.children
 */
const Layout = ({onShowInformation,children}) => {
    const { user } = useAuth0();
    return (
        <Fragment>
            <Header />
            <Main title={onShowInformation ? 'Welcome to Casting agencies' : `Welcome ${user.name}`}>
                {onShowInformation ?
                    <div>How to utilize this web page</div>:
                <Fragment>
                    <NavigationBar />
                    {children}
                </Fragment>
                
            }
            </Main>
            <footer className='footer'>
                Hi this is the footer, all reserved copyright&copy;
            </footer>
        </Fragment>
    );
};

export default Layout;