import React from 'react';
import classes from './NavigationBar.module.css';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li>
                    <NavLink to='/actors' activeClassName={classes.active}>
                        Actors
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/movies' activeClassName={classes.active}>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;