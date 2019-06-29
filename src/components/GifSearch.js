import React, { Component } from 'react'



export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleInput = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <input type="text" onChange={event => this.handleInput(event) } value={this.state.searchTerm} />
        <button type="submit">Submit</button>
      </form>
    )
  }

}
