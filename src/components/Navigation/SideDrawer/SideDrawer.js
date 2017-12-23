import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

import css from './SideDrawer.css';
const sideDrawer = (props) => {
    let attachedClasses = [css.SideDrawer, css.Close];
    if (props.open) {
        attachedClasses = [css.SideDrawer, css.Open];
    }
    return (
        <Aux>
            {props.open ? <Backdrop hideHandler={props.closed} /> : null}
            <div className={attachedClasses.join(" ")}>
                <div className={css.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;