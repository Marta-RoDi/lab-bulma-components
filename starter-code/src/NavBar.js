import React from "react";
import CoolButton from './CoolButton';
import 'bulma/css/bulma.css';

export default class NavBar extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>
      </div>
  
      <div className="navbar-end">
      <CoolButton className="button is-info" text="Login"></CoolButton>
      <CoolButton className="button is-primary" text="Signup"></CoolButton>
      </div>
    </div>
  </nav> 
    )
  }
}