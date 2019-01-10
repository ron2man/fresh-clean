import React, { Component } from 'react';
import { Switch, Route, NavLink  } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import Minute from './pages/Minute/Minute'

// Font Awsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faCircle, faCommentDots } from '@fortawesome/free-solid-svg-icons'


import './App.css';

library.add(faEllipsisV, faCircle, faCommentDots)

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



function Header() {
  return <header className="flex space-between align-items-center">
    <h1 className="logo">So Fresh So Clean</h1>
    <FontAwesomeIcon icon={faEllipsisV} />
  </header>
}

function Footer() {
  return <footer className="flex space-around align-items-center">
    <NavLink exact  to='/' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faCircle} />בית</div></NavLink >
    <NavLink  to='/minute' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faCommentDots} />קח דקה</div></NavLink >
    <NavLink  to='/about' activeStyle={{ color: 'black' }}><div className="app-button"><FontAwesomeIcon icon={faCommentDots} />לוח</div></NavLink>
  </footer>;
}




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
