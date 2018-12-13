import React, { Component } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Theme from './components/Theme/Theme';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navigation />
        <Theme />
        {/* <Notice /> */}
      </>
    );
  }
}

export default App;
