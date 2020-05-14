import React, {Component} from 'react';
import Image from "/.birdofparadise.jpeg"

export default class FlowerImage extends Component {
  render () {
    return (
      <div>
        <Image src="'./birdofparadise"/>
      </div>
    )
  }
}

export default class Child extends Component {
  render () {
    return (
      <img src={this.props.url}/>
    )
  }
}
