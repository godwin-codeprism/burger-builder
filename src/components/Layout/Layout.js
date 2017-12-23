import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        SideDrawerClosed: false
    }
    SideDrawerClosedHandler = () => {
        this.setState((prevState) => { return { SideDrawerClosed: !prevState.SideDrawerClosed } });
    }

    render() {
        return (
            <Aux>
                <ToolBar menuState={this.state.SideDrawerClosed} menuStateHandler={this.SideDrawerClosedHandler} />
                <SideDrawer closed={this.SideDrawerClosedHandler} open={this.state.SideDrawerClosed} />
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;