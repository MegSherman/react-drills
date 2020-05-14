import React, {Components} from 'react'

export default class Child extends Component {
    render () {
      return (
        <img src={this.props.url}/>
      )
    }
  }
  