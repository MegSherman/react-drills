import React from 'react';
import './App.css';
import NewTask from "./NewTask.js"
import List from "./List"

export default class App extends Component {
  constructor () {
    super ()
    this.state = {
      list: []
    }

    this.addTask - this.addTask.bind(this)
  }

  addTask (task) {
    this.setState ({ list: [...this.state.list, task]})
  }

  render() {
    return (
      <div>
        <h1> To Do </h1>
        <NewTask add={this.addTask}/>
        <List tasks={this.state.list}/>
      </div>
    )
  }
}
