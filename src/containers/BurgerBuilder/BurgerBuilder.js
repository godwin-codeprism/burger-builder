import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 5
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
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls addIngredients={this.addIngredientsHandler} removeIngredients={this.removeIngredientsHandler} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;