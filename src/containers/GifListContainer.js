import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'



class GifListContainer extends React.Component {
  state = { gifs: [] };

  submitHandler = (term) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(gifArray => {
      console.log(gifArray)
        this.setState({
          gifs: gifArray.data.map(g => g.images.original.url)
        })
      })
  }


  render() {
    return (
      <div>
      <GifList gifs={this.state.gifs} />
      <GifSearch onSubmit={this.submitHandler} />

      </div>
    )
  }
}
export default GifListContainer
