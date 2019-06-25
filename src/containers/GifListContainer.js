import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  handleResults = (search={search: 'animal'}) => {
    let query = search.search
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      this.setState({
        gifs: data.data
      })
    })
  }

  render () {
    return (
      <div>
        <GifList firstThree={this.state.gifs.slice(0,3)}/>
        <GifSearch handleResults={this.handleResults}/>
      </div>
    )
  }

  componentDidMount() {
    this.handleResults()
    // fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({
    //     gifs: data.data
    //   })
    // })
  }
}

export default GifListContainer;
