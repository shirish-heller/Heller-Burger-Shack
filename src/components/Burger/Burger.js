import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let ingredientList = []
    let isIngredientsEmpty = true;

    //preparing ingredients list
    Object.keys(props.ingredients).forEach(key=>{
        let count = props.ingredients[key];
        if(count>0) {
            isIngredientsEmpty = false;
        }
        for(let i=0; i<count; i++) {
            ingredientList.push(key);
        }
    });

    //actual ingrediennts JSX
    let burgerToppings = ingredientList.map( (ingredient, index)=> {
        return <BurgerIngredients type={ingredient} key={ingredient + "_" + index}/>
    });

    //Checking if no ingredients are present
    if(isIngredientsEmpty === true) {
        burgerToppings = (<p>Please start adding the ingredients!!</p>);
    }

    return (
        <div className={classes.Burger}>
        <BurgerIngredients type="burger-top"/>
        {burgerToppings}     
        <BurgerIngredients type="burger-bottom"/>
        </div>
    )
}

export default burger;