import React, { Component } from 'react';

import './assets/css/App.css';
import './assets/css/styles.css';
import '../node_modules/carbon-components/css/carbon-components.min.css';

import NavBarComponent from './components/NavBar';
import ChatComponent from './components/Chat';
import FooterBarComponent from './components/FooterBar';

class App extends Component {
  render() {
    return (
      <div>
            <NavBarComponent/>
            <ChatComponent/>
            <FooterBarComponent/>
      </div>
    );
  }
}

export default App;
