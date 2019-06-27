import React, { Component } from 'react'

export default class GifList extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
          gifs: props
      }
   }

   renderGifs = () => {
      if (this.props.gifs !== null) {
         return this.props.gifs.map(gif => <li>< img src={gif.images.original.url}/></li>)
      }
   }
   

   render() {
      return (
         <ul>
            {this.renderGifs()}
         </ul>
      )
   }
}
