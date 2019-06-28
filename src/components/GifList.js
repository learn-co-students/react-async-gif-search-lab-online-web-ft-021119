import React from 'react'



const GifList = (props) => {
  return (
    <div>

    {props.gifs.slice(0,3).map(gif => <li><img key={gif.url} src={gif.url} alt="gif" width="300px" height="200px"/></li>)}

    </div>
  )
}

export default GifList