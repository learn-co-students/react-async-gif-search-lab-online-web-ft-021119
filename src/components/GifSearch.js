import React from 'react'
import PropTypes from 'prop-types'

class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault
    this.props.handleSubmit(this.state)
  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
      Search: <input id="search" name="search" type="text" value={this.state.search} onChange={this.handleChange}/>
      <button type= "submit"> Submit </button>
      </form>
    )
  }
}

export default GifSearch;
