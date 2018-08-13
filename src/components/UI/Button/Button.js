import React from 'react';
import classes from './Button.css';

const button = (props)=> {
    return (
        <div onClick={props.clicked} className={[classes.Button, classes[props.buttonType]].join(' ')}>
            {props.children}
        </div>
    )
}

export default button;