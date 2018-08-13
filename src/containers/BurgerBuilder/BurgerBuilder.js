import React, {Component} from 'react';
import AuxComp from '../../hoc/AuxComp/AuxComp';
import Burger from '../../components/Burger/Burger';
import Burgercontrols from '../../components/Burger/BurgerControls/Burgercontrols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
 
const INGREDIENTS_PRICES = {
    cheese: 25.25, 
    bacon: 50.55,
    meat: 50.85,
    salad: 15.99
}
class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            cheese: 0, 
            bacon: 0,
            meat: 0,
            salad: 0
        },
        totalPrice: 20,
        purchasable: false,
        purchasing: false
    }

    updatePurchasableStatus() {
        let ingredients = this.state.ingredients;
        const sum = Object.keys(ingredients).map(ing=> {
            return ingredients[ing];
        }).reduce((sum, elm)=> {
            return elm + sum;
        }, 0);
        this.setState({purchasable: sum>0})
    }
    addIngredientHandler = (type)=>{
        let oldCount = this.state.ingredients[type];
        let newCount = oldCount+1;
        let newIngredients = this.state.ingredients;
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice + INGREDIENTS_PRICES[type];
        newIngredients[type] =newCount;
        this.setState({ingredients: newIngredients, totalPrice: newPrice});
        this.updatePurchasableStatus();
    }

    removeIngredientHandler = (type)=>{
        let oldCount = this.state.ingredients[type];
        if(oldCount>0) {
            let newCount = oldCount-1;
            let newIngredients = this.state.ingredients;
            let oldPrice = this.state.totalPrice;
            let newPrice = oldPrice - INGREDIENTS_PRICES[type];
            newIngredients[type] =newCount;
            newIngredients[type] =newCount;
            this.setState({ingredients: newIngredients, totalPrice: newPrice});    
        }
        this.updatePurchasableStatus();        
    }

    purchaseHandler = ()=> {
        this.setState({purchasing: true})
    }

    dismissModalHandler = ()=> {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = ()=> {
        alert('You Continue to payment!!');
    }
    getDisableButtonInfo = ()=>{
        let ingredients = this.state.ingredients;
        let disabledButtonInfo = {}
        Object.keys(ingredients).forEach(ingName=> {
            if(ingredients[ingName] === 0) {
                disabledButtonInfo[ingName] = true;
            } else {
                disabledButtonInfo[ingName] = false;
            }
        });
        return disabledButtonInfo;
    }
    render() {
        return <AuxComp>
            <Modal show={this.state.purchasing} dismissModal={this.dismissModalHandler}>
                <OrderSummary price={this.state.totalPrice} continue={this.purchaseContinueHandler} cancel={this.dismissModalHandler} ingredients={this.state.ingredients}/>
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <Burgercontrols addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabledButtonInfo={this.getDisableButtonInfo()}
            totalPrice={this.state.totalPrice}
            purchasable={this.state.purchasable}
            order={this.purchaseHandler}/>
          </AuxComp>;
    }
}

export default BurgerBuilder;