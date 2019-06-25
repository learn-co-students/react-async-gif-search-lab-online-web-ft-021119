import React from 'react'

class GifList extends React.Component {
  render () {
    return(
      <div>
        <ul>

          {this.props.firstThree.map((gif,idx) => <li><img key={idx} src={gif.images.original.url}/></li>)}
        </ul>
      </div>
    )
  }
}

export default GifList;
