import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
   constructor(props) {
      super(props)
   
      this.search = React.createRef()

      this.state = {
         data: null
      }
   }

   componentDidMount() {

   }

   handleSubmit = (query) => {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
         .then(resp => resp.json())
         .then(json => this.setState({data: json.data.slice(0,3)}))
   }
   

   render() {
      return (
         <div>
            <div className="search">
               <GifSearch ref={this.search} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
            <GifList {...this.state.data}/>
         </div>
      )
   }
}
