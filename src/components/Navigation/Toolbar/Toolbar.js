import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Logo from '../../Logo/Logo';

import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggleButton from '../MenuToggle/MenuToggle';
import classes from './Toolbar.css';

const toolbar = (props) => {
    return (
        <Aux>
            <header className={classes.Toolbar}>
                <MenuToggleButton menuState={props.menuState} menuStateHandler={props.menuStateHandler}/>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        </Aux>
    )
}

export default toolbar;