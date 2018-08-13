import React from 'react'; 
import classes from './BurgerControls.css'
import BurgerControl from './BurgerControl/Burgercontrol';

const controls = [
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Salad', type:'salad'},

]

const burgerControls = (props)=> {

    return (
        <div className={classes.BurgerControls}>
        <p><strong>Price:- {props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(ctrl=> {
        return <BurgerControl label={ctrl.label}
         key={ctrl.label}
         ingredientAdded={()=> props.addIngredient(ctrl.type)}
         ingredientRemoved={()=>props.removeIngredient(ctrl.type)}
         buttonInfo={props.disabledButtonInfo[ctrl.type]}
         />
    }) }

        <button disabled={!props.purchasable}
         className={classes.OrderButton}
         onClick={props.order}>Order Now!!</button>
        </div>
   
    )
}

export default burgerControls;