import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: ['Calista', 'Arianne', 'Jeena', 'Alisha', 'Josh', 'Ben', 'Kayla', 'Levi']
    }
  }

  render() {
    let friendsDisplay = this.state.friends.map ((element, index) => {
      return <h2 key={index}> {element} </h2>
    })
    return <div className="App"> {friendsDisplay} </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }