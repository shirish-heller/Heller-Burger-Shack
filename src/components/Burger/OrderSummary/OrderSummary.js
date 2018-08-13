import React from 'react';
import Button from '../../UI/Button/Button';
import AuxComp from '../../../hoc/AuxComp/AuxComp';

const orderSummary = (props)=> {
    let ingredientKeys = Object.keys(props.ingredients);
    let items = ingredientKeys.map((ing, index)=> {
       return <li style={{textTransform: 'capitalize'}} key={ing + "_key" + index}> {ing} : {props.ingredients[ing]}</li>
    });
    return (
        <AuxComp>
            <h3 style={{textAlign: 'center'}}>Your Order!!</h3>
            <hr/>
            <p>Your delicious burger is ready with the following ingredients:-</p>
            <ul>
                {items}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.continue} buttonType="Success">CONTINUE</Button>
            <Button clicked={props.cancel} buttonType="Danger">CANCEL</Button>
            <hr/>
        </AuxComp>

    )
}

export default orderSummary;