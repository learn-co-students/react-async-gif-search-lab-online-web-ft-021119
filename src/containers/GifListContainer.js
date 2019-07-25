import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        this.search = React.createRef()
    }

    handleFetch = event => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${event}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => this.setState({
                data: json.data.slice(0, 3)
            })
        )
    }

    render() {
        return(
            <div>
                <GifSearch ref={this.search} handleSubmit={this.handleFetch} />
                <GifList gifs={this.state.data} />
            </div>
        )
    }
}

export default GifListContainer
