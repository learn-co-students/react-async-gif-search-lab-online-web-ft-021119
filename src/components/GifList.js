import React, { Component } from 'react';


export default class GifList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: this.props.gifs
    }

 }

  render() {
    const gifImages = this.props.gifs.map((gif) => <li><img src={gif} alt="gif"/></li>);

    return (

      <ul className="firstThreeList">
        {gifImages}
      </ul>
    )
  }

}
