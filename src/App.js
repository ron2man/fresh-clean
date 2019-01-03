import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faCircle, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import Homepage from './pages/Homepage/Homepage'
import './App.css';

library.add(faEllipsisV, faCircle, faCommentDots)


function Header() {
  return <header className="flex space-between align-items-center">
    <h1 className="logo">So Fresh So Clean</h1>
    <FontAwesomeIcon icon={faEllipsisV} />
  </header>
}








function Footer() {
  return <footer className="flex space-around align-items-center">
    <div className="app-button active"><FontAwesomeIcon icon={faCircle} /> אוטומציות</div>
    <div className="app-button"><FontAwesomeIcon icon={faCommentDots} />מכשירים</div>
    <div className="app-button"><FontAwesomeIcon icon={faCommentDots} />לוח מחוונים</div>
  </footer>;
}

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
