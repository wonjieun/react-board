import React, { Component } from 'react';
import { createPortal } from 'react-dom';

// import Header from './components/Header';
import Navigation from './components/Navigation';
import Theme from './components/Theme/Theme';

class Portals extends Component {
  render() {
    return createPortal(<Header />, document.getElementById('header'));
  }
}

const Header = () => {
  return (
    <div className="header_bar">
      <strong className="header_user">관리자님</strong>
      <button className="header_btn">로그아웃</button>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <Portals />
        {/* <Header /> */}
        <Navigation />
        <Theme />
        {/* <Notice /> */}
      </>
    );
  }
}

export default App;
