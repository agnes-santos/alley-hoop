import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Games from './components/Games/Games'


class App extends React.Component {

    state = {
        sideDrawerOpen: false
    };

    handleSideDrawerToggle = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    }

    handleBackdropClick = () => {
        this.setState({
            sideDrawerOpen: false
        });
    }

    render() {
        return (
            <div className="app">
                <Toolbar 
                    onSideDrawerToggle={this.handleSideDrawerToggle}
                    sideDrawerOpen={this.state.sideDrawerOpen}
                /> 
                <SideDrawer show={this.state.sideDrawerOpen}/>
                <Backdrop 
                    onBackdropClick={this.handleBackdropClick}
                    show={this.state.sideDrawerOpen}
                />
                <main className="main">
                    <Games/>
                </main>
            </div>
        );
    }

}

export default App;
