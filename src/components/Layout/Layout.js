import React, { Component } from 'react';
import AuxComp from '../../hoc/AuxComp/AuxComp'
import Toolbar from '../Toolbar/Toolbar';
import Sidedrawer from '../UI/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = ()=>{
        this.setState({showSideDrawer: false});
    }
    toggleSideDrawerHandler = ()=> {
        this.setState((prevState)=> {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }
    render() {
        return <AuxComp>
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}></Toolbar>
        <Sidedrawer open={this.state.showSideDrawer} closed={this.showSideDrawerHandler}/>
        <main>{this.props.children}</main>
      </AuxComp>;

    }
}

export default Layout;