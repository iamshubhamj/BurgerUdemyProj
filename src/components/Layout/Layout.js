import React from 'react';
import Aux from '../../hoc/Auxer';
import classes from '../Layout/Layout.css'
const Layout = (props) => (
    <Aux>
        <div >
    ToolBar, SideDrawer, Backdrop
</div>
<main className={classes.Content}>
    {props.children}
</main>
    </Aux>
)

export default Layout;