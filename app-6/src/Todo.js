import React, {Component} from 'react'

export default class ToDo extends Component {
    // constructor () {
    //     super() 
    //     this.state = {

    //     }
        render () {
            return <h3>{this.props.tasks}</h3>
        }
}
