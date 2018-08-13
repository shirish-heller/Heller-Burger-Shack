import React from 'react';
import Logo from '../../../Toolbar/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import AuxComp from '../../../../hoc/AuxComp/AuxComp';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const sideDrawer = (props)=> {
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }
    return (
        <AuxComp>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>

        </AuxComp>
    )
}

export default sideDrawer;