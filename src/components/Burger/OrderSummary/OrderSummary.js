import React from 'react';

import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>You burger contains</p>
            <ul>
                {Object.keys(props.ingredients).map((igKey, index) => {
                    return <li key={igKey}>{igKey.charAt(0).toUpperCase() + igKey.slice(1)} : {props.ingredients[igKey]}</li>
                })}
            </ul>
            <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType="Danger" click={props.hideHandler}>Cancle</Button>
            <Button btnType="Success" click={props.purchaseHandler}>Continue</Button>
        </Aux>
    )
}

export default orderSummary;