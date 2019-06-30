import React from 'react'

class GifSearch extends React.Component {
  state = {term: ''}

  onInputSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.props.onSubmit(this.state.term)
  }

  onInputChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onInputSubmit} >
          <label>Enter a Search Term</label>
          <input type="text"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        </form>
      </div>
    )
  }
}

export default GifSearch
