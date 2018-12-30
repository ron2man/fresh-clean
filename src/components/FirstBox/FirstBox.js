import React from 'react';
import './FirstBox.css'

class FirstBox extends React.Component {
    render() {
      return <div className="box first-box">
      <h2>Keep up the good work. </h2>
      <h2>we <span className="red">♥</span> you. you're not alone.</h2>
      <p className="using-app">151 using the app</p>
  </div>;
    }
  }

  export default FirstBox;