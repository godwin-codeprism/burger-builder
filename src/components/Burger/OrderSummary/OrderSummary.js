import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
    render() {
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>You burger contains</p>
                <ul>
                    {Object.keys(this.props.ingredients).map((igKey, index) => {
                        return <li key={igKey}>{igKey.charAt(0).toUpperCase() + igKey.slice(1)} : {this.props.ingredients[igKey]}</li>
                    })}
                </ul>
                <p>Total Price: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
                <Button btnType="Danger" click={this.props.hideHandler}>Cancle</Button>
                <Button btnType="Success" click={this.props.purchaseHandler}>Continue</Button>
            </Aux>
        )
    }

}

export default OrderSummary;