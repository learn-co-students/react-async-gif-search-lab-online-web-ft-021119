import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      firstThreeGifs: [],
      searchTerm: ''
    }
  }

  componentDidUpdate() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then( response => response.json() )
    .then( data => data.data.slice(0, 3) )
    .then( gifs => gifs.map(function(gif) {return gif.images.original.url}))
    .then( gifAttr => this.setState({firstThreeGifs: gifAttr}))
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.children[0].value
    })
  }

  render() {
    return(
      <div>
        <GifSearch handleSubmit={this.submitHandler}/>
        <GifList gifs={this.state.firstThreeGifs}/>
      </div>
    )
  }
}
