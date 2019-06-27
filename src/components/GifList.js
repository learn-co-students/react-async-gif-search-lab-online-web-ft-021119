import React, { Component } from 'react'

export default class GifList extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
          gifs: props
      }
   }

   renderGifs = () => {
      console.log(this.state.gifs)
   }
   

   render() {
      return (
         <ul>
            {this.renderGifs()}
         </ul>
      )
   }
}
