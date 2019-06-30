import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'



class GifListContainer extends React.Component {
  state = { gifs: [] };

  baseURL: 'http://api.giphy.com/v1/gifs/'

  submitHandler = (term) => {
    fetch(`baseURL/search${term}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
        gifs: data.gifs.slice(0,4) })
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
