import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => {
    return (
        <Aux>
            {props.show ? <Backdrop hideHandler={props.hideHandler}/> : null}
            <div className={classes.Modal} style={{ transform: props.show ? 'translateY(0px)' : 'translateY(-100vh)', opacity: props.show ? 1 : 0 }}>
                {props.children}
            </div>
        </Aux>
    );
}

export default modal;