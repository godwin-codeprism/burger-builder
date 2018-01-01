import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import PostsContainer from "../PostsContainer/PostsContainer";

import httpOrders from '../../httpOrders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICES = {
  salad: 2,
  bacon: 4,
  cheese: 6,
  meat: 8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 5,
    purchasing: false,
    showPosts: false,
    checkout: false
  };
  componentDidMount() {
    httpOrders.get('/ingredients.json').then(res => {
      this.setState({ ingredients: res.data });
    }).catch(error => {
      console.log(error);
    })
  }
  addIngredientsHandler = type => {
    const ingredientCount = this.state.ingredients[type] + 1;
    const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = ingredientCount;
    this.setState({
      totalPrice: newTotalPrice,
      ingredients: updatedIngredients
    });
  };

  removeIngredientsHandler = type => {
    const ingredientCount = this.state.ingredients[type] - 1;
    const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = ingredientCount;
    this.setState({
      totalPrice: newTotalPrice,
      ingredients: updatedIngredients
    });
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  hideBackDrop = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    this.setState({ checkout: true });
    const data = {
      ingredients: {
        ...this.state.ingredients
      },
      user: {
        name: "Godwin",
        email: "alfa.godwin.omega@gmail.com",
        address: {
          street: "Shivaji Nagar",
          city: "Nalgonda",
          postalCode: 508001,
          country: "India"
        }
      },
      price: this.state.totalPrice
    }
    httpOrders.post("/orders.json", data).then(res => {
      this.setState({ checkout: false, purchasing: false });
    }).catch(err => {
      console.log(err);
    });
  };
  togglePosts = () => {
    this.setState(prevState => {
      return { showPosts: !prevState.showPosts };
    });
  };
  render() {
    let orderSummary = (<OrderSummary
      ingredients={this.state.ingredients}
      purchaseHandler={this.purchaseContinueHandler}
      hideHandler={this.hideBackDrop}
      totalPrice={this.state.totalPrice}
    />);
    let burgerBuilder = <Spinner />
    if (this.state.checkout || !this.state.ingredients) {
      orderSummary = (<Spinner />);
    }
    if (this.state.ingredients) {
      burgerBuilder = (
        <Aux>
          <Burger
            ingredients={this.state.ingredients}
            showPosts={this.state.showPosts}
          />
          <PostsContainer showPosts={this.state.showPosts} />
          <BuildControls
            addIngredients={this.addIngredientsHandler}
            removeIngredients={this.removeIngredientsHandler}
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseHandler={this.purchaseHandler}
            togglePosts={this.togglePosts}
          />
        </Aux>
      )
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} hideHandler={this.hideBackDrop}>
          {orderSummary}
        </Modal>
        {burgerBuilder}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, httpOrders);
