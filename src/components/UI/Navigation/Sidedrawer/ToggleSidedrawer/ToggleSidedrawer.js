import React from 'react';
import classes from './ToggleSidedrawer.css';

const toggleSidedrawer = (props)=> {
    return (
        <div className={classes.ToggleSidedrawer} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

export default toggleSidedrawer;
