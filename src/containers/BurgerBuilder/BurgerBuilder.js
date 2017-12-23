import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 2,
    bacon: 4,
    cheese: 6,
    meat: 8
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5,
        purchasing: false,
    }
    addIngredientsHandler = (type) => {
        const ingredientCount = this.state.ingredients[type] + 1;
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = ingredientCount;
        this.setState({ totalPrice: newTotalPrice, ingredients: updatedIngredients });

    }

    removeIngredientsHandler = (type) => {
        const ingredientCount = this.state.ingredients[type] - 1;
        const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = ingredientCount;
        this.setState({ totalPrice: newTotalPrice, ingredients: updatedIngredients });
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    hideBackDrop = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinueHandler = () => {
        console.log('Working');
    }
    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} hideHandler={this.hideBackDrop}>
                    <OrderSummary ingredients={this.state.ingredients} purchaseHandler={this.purchaseContinueHandler} hideHandler={this.hideBackDrop} totalPrice={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls addIngredients={this.addIngredientsHandler} removeIngredients={this.removeIngredientsHandler} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} purchaseHandler={this.purchaseHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;