import React from 'react';
import GifListContainer from '../containers/GifListContainer'

class GifSearch extends React.Component {
  state = { searchFor: ''}


  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
  event.preventDefault()
  this.sendFormDataSomewhere(this.state)
}

  render() {
    <GifListContainer searchTerm={this.searchFor}/>

    return (
        <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
        <button onClick={event => this.handleSubmit(event)}>Search</button>
      </form>
    )

  }
}
