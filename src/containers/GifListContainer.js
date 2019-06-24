import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  handleSubmit = (event) => {
    event.preventDefault
    
    console.log('not sure what this is supposed to do')
  }

  render () {
    return (
      <div>
        <GifList firstThree={this.state.gifs.slice(0,3)}/>
        <GifSearch handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(response => response.json())
    // .then(data=>console.log(data))
    // .then(data => {debugger})
    .then(data => {
      this.setState({
        gifs: data.data
      })
    })
  }
}

export default GifListContainer;
