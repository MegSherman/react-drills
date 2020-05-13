import React, {Component} from 'react';
import './App.css';

export default class FilterListApp extends Component {
  constructor () {
    super ()
    this.state = {
      filterString: '',
      sports: ['baseball', 'racquetball', 'hockey', 'football', 'basketball', 'soccer', 'lacrosse', 'volleyball', 'polo', 'tennis', 'curling']
    }
  }

  handleChange (filter) {
    this.setState ({ filterString: filter })
  }

  render() {
    let sportsList = this.state.sports.filter ((element, index) => {
      return element.includes (this.state.filterString)
    })
    .map ((element, index) => {
        return <h2 key={index}> {element} </h2>
    })
    return (
      <div>
        <input onChange={ e => this.handleChange (e.target.value)} type="text"/>
        {sportsList}
      </div>
    )
  }
}