import React from 'react';
import classes from './Toolbar.css';
import Logo from './Logo/Logo';
import NavigationItems from '../UI/Navigation/NavigationItems/NavigationItems';
import ToggleSidedrawer from '../UI/Navigation/Sidedrawer/ToggleSidedrawer/ToggleSidedrawer';

const toolbar = (props)=> {
    return (
    <header className={classes.Toolbar}>
        <ToggleSidedrawer clicked={props.toggleSideDrawer}/>
        <Logo/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
    )
}

export default toolbar;
