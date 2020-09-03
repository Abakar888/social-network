import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={classes.nav__link} to='/Profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`} >
                <NavLink className={classes.nav__link} to='/Dialogs' activeClassName={classes.activeLink}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classes.nav__link} to='/News' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classes.nav__link} to='/Music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={classes.nav__link} to='/Settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;