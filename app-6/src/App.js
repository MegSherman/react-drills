import React, {Component} from 'react';
import Todo from "./Todo"

export default class ToDoList extends Component {
  constructor () {
    super ()
    this.state = {
      tasks: [],
      userInput: ''
    }
    this.addTask = this.addTask.bind(this)
  }

  handleChange (value) {
    this.setState ({ userInput: value })
  }

  addTask () {
    this.setState ({
      tasks: [...this.state.tasks, this.state.userInput],
      userInput: ''
    })
  }

  render () {
    const list = this.state.tasks.map ((element, index) => {
      return <Todo key={index} tasks={element} />
    })

    return (
      <div>
        <h1> To Do</h1>
        <div>
          <input value={this.state.userInput} placeholder="Enter new task" onChange={e => this.handleChange (e.target.value)}/>
        <button onClick={this.addTask}> Add </button>
      </div>
      <br />
      {tasks}
      </div>
    )
  }
}
