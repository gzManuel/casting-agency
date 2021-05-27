import { Fragment } from "react";
import Header from './Header';
import './Layout.css';
import Main from "./Main";

const Layout = (props) => {
    return (
        <Fragment>
            <Header />

            <Main>
                {props.children}
            </Main>
            
            <footer className='footer'>
                Hi this is the footer, all reserverd copright&copy;
            </footer>
        </Fragment>
    );
};

export default Layout;