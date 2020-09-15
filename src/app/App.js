import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Analytics from '../components/Analytics/Analytics';

// Features
import Games from '../features/Games/Games';
import About from '../features/About/About';

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  handleSideDrawerToggle = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let { sideDrawerOpen } = this.state;

    return (
      <Router>
        <Analytics />
        <div className="app">
          <Toolbar
            onSideDrawerToggle={this.handleSideDrawerToggle}
            sideDrawerOpen={sideDrawerOpen}
          />
          <SideDrawer show={sideDrawerOpen} onSideDrawerToggle={this.handleSideDrawerToggle} />
          <main className="main">
            <Switch>
              <Redirect exact from="/" to="/games-today" />
              <Route path="/games-today" component={Games} />
              <Route path="/about" component={About} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
