import React, { Component } from 'react';
import Aux from '../../hoc/Auxer';
import classes from '../Layout/Layout.css'
import Toolabar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'



class Layout extends Component {

    state = {
        showSideDrawer : true
    }
    sideDrawerClosedHandler = () => {

        this.setState({showSideDrawer : false})
    }

    render() {
        return (
            <Aux>
                <Toolabar />
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout;