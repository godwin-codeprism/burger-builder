import React from 'react';

import Aux from '../../../hoc/Auxiliary'
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
        </Aux>
    )
}

export default orderSummary;