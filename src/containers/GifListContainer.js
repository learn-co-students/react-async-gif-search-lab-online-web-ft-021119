import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
  state = { giphys: [] }

  componentDidMount() {
    let root = 'http://api.giphy.com/v1/gifs/'
    let search = `search?q=${this.props.searchFor}`
    let apiKey = '&api_key=dc6zaTOxFJmzC&rating=g'


      fetch(root + search + apiKey)
        .then(response => response.json())
        .then(response => {
          debugger
          this.setState({
            giphys: response.data.slice(0,3).map(giphy =>
            giphy.images.original.url)
          })
        })
    }

    render() {
      return (
        <div>
          <GifSearch />
          <GifList gifs={this.state.giphys}/>

        </div>
      )
    }
}
