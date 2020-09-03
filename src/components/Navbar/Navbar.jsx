import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a className={`${classes.nav__link} ${classes.active}`} href='/Profile'>Profile</a>
            </div>
            <div className={classes.item}>
                <a className={classes.nav__link} href='/Messages'>Messages</a>
            </div>
            <div className={classes.item}>
                <a className={classes.nav__link} href='/News'>News</a>
            </div>
            <div className={classes.item}>
                <a className={classes.nav__link} href='/'>Music</a>
            </div>
            <div className={classes.item}>
                <a className={classes.nav__link} href='/'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;