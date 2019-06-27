import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
   constructor(props) {
      super(props)
   
      this.search = React.createRef()

      this.state = {
         data: null
      }
   }


   handleSubmit = (query) => {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
         .then(resp => resp.json())
         .then(json => this.setState({data: json.data.slice(0,3)}))
   }


   render() {
      return (
         <div>
            <GifSearch ref={this.search} handleSubmit={this.handleSubmit} />
            <GifList gifs={this.state.data} />
         </div>
      )
   }
}
