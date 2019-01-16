import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import Minute from './pages/Minute/Minute'

// Font Awsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faHandHoldingUsd, faCommentDots, faHome, faStopwatch } from '@fortawesome/free-solid-svg-icons'


import './App.css';

library.add(faEllipsisV, faHandHoldingUsd, faCommentDots, faHome, faStopwatch)

const Main = () => (
  <main>

    <Switch>
      <Route exact path='/' component={Homepage} />
      {/* both /roster and /roster/:number begin with /roster */}
      <Route exact path='/minute' component={Minute} />
      <Route path='/schedule' component={Homepage} />
    </Switch>
  </main>
)


const Header = () => (
  <header className="flex space-between align-items-center">
    <h1 className="logo">So Fresh So Clean</h1>
    <FontAwesomeIcon icon={faEllipsisV} />
  </header>
)

const Footer = () => (
  <footer className="flex space-around align-items-center">
    <NavLink exact to='/' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faHome} />Home</div></NavLink >
    <NavLink to='/minute' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faStopwatch} />Minute</div></NavLink >
    <NavLink to='/about' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faHandHoldingUsd} />Save</div></NavLink>
  </footer>
)
// function Footer() {
//   return <footer className="flex space-around align-items-center">
//     <NavLink exact to='/' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faHome} />בית</div></NavLink >
//     <NavLink to='/minute' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faStopwatch} />קח דקה</div></NavLink >
//     <NavLink to='/about' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faHandHoldingUsd} />כסף</div></NavLink>
//   </footer>;
// }




class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
