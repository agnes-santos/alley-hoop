import React from 'react';
import './App.css';
import Toolbar from '../components/Toolbar/Toolbar';
import Games from '../features/Games/Games';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        <main className="main">
          <Games />
        </main>
      </div>
    );
  }
}

export default App;
