import React from 'react'

class GifList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs: props
        }
    }

    handleGifs = () => {
        if (this.props.gifs !== null) {
            return this.props.gifs.map(gif => <li><img src={gif.images.original.url} alt="" /></li>)
        }
    }

    render() {
        return(
            <ul>
                {this.handleGifs()}
            </ul>
        )
    }
}

export default GifList
