import React from 'react';  
import classes from './Burgercontrol.css'

const burgerControl = (props)=> {
    return <div className={classes.BurgerControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}
         onClick={props.ingredientRemoved}
         disabled={props.buttonInfo}
         >Less</button>
        <button className={classes.More} onClick={props.ingredientAdded}>More</button>
      </div>
}

export default burgerControl;