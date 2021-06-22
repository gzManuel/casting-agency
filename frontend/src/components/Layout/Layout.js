import { Fragment } from "react";

import './Layout.css';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Main from "./Main";
/**
 * The Layout of the application, all the inside components will be showed in the main component.
 */
const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <Main>
                <NavigationBar />
                {props.children}
            </Main>
            <footer className='footer'>
                Hi this is the footer, all reserved copyright&copy;
            </footer>
        </Fragment>
    );
};

export default Layout;