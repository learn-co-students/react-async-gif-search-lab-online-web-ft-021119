import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component{
	state = {
		gifs: []
	}

	render() {
    return (
      <div>
       <GifSearch fetchGIFs={this.fetchGIFs}/>
       <GifList gifs={this.state.gifs}/>
      </div>
    )
  }


  componentDidMount() {
    this.fetchGIFs()


  }

  fetchGIFs = (input = 'hello') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(({data}) => {

        this.setState({gifs: data.map(gif => ({url:gif.images.original.url }))})
      })
  }


}



export default GifListContainer