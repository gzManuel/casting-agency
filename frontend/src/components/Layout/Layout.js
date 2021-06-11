import { Fragment } from "react";

import './Layout.css';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Main from "./Main";

const Layout = (props) => {


    return (
        <Fragment>
            <Header />
            <Main>
                <NavigationBar />
                {props.children}
            </Main>
            <footer className='footer'>
                Hi this is the footer, all reserverd copright&copy;
            </footer>
        </Fragment>
    );
};

export default Layout;