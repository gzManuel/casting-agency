import { Fragment } from "react";
import Header from './Header';
import NavigationBar from './NavigationBar';
import './Layout.css';
import Main from "./Main";
import { Route } from 'react-router-dom';

const Layout = (props) => {


    return (
        <Fragment>
            <Header />
            <Main>
                <div>
                    <NavigationBar />
                    <Route path='/actors'>
                        {props.formActor}
                    </Route>
                    <Route path='/movies'>
                        {props.formMovie}
                    </Route>
                </div>
                {props.children}
            </Main>
            <footer className='footer'>
                Hi this is the footer, all reserverd copright&copy;
            </footer>
        </Fragment>
    );
};

export default Layout;