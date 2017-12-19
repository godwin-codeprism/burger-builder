import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
]
const buildControls = (props) => {
    return (<div className={classes.BuildControls}>
        {controls.map(ctrl => {
            return <BuildControl key={ctrl.label} type={ctrl.type} label={ctrl.label} addIngredients={props.addIngredients} removeIngredients={props.removeIngredients} ingredients={props.ingredients} />
        })}
        <p>Total Price: <b>{props.totalPrice.toFixed(2)}</b></p>
        <button className={classes.OrderButton} disabled={Object.keys(props.ingredients).reduce((total, igKey) => { return total + props.ingredients[igKey] }, 0) <= 0}>ORDER NOW</button>
    </div>);
}

export default buildControls;