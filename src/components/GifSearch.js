import React, {Component} from 'react'



class GifSearch extends Component{
	state = {
    input: ""
	}

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.input)
  }

	render() {
    return (
      <div><h3>Enter a Search Term</h3>
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.input} onChange={event => this.setState({input: event.target.value})} />

      </form>
        <br />
      </div>
    )
  }
}

  export default GifSearch