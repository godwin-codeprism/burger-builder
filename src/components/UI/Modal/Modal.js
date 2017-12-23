import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {
    shouldComponentUpdate(nextProps, prevProps) {
        return nextProps.show !== this.props.show;
    }
    render() {
        return (
            <Aux>
                {this.props.show ? <Backdrop hideHandler={this.props.hideHandler} /> : null}
                <div className={classes.Modal} style={{ transform: this.props.show ? 'translateY(0px)' : 'translateY(-100vh)', opacity: this.props.show ? 1 : 0 }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;