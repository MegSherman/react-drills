import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class LoginApp extends Component {
  constructor () {
    super ()
    this.state = {
      username: '',
      password: ''
    }
  }
  enterUsername (value) {
    this.setState ({username: value})
  }

  enterPassword (value) {
    this.setState ({password: value})
  }

  loginClick () {
    alert (`You entered username: ${this.state.username} and password: ${this.state.password}`)
  }
  
  render () {
    return (
      <div>
        <h3>Username</h3>
        <input onChange={ e => this.enterUsername (e.target.value)}/>
        <h3>Password</h3>
        <input onChange={e => this.enterPassword (e.target.value)}/>
        <button onClick={() => this.loginClick (this.state.username && this.state.password)}>Click</button>
      </div>
    )
  }
}
