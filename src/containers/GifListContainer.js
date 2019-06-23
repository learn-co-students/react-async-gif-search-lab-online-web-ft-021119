import React, {Component} from 'react'
import GifLift from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            gifs : []
            //query : ' '
        }
    }

    handleSearchQuery(query){
        fetch('https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC&rating=g')
            .then(response => response.json())
            .then(myJson => {
                let gifs = myJson.data.slice(0, 3).map((data) => 
                   data.images.original.url
                )
                console.log(gifs)
                this.setState({
                    ...this.state,
                    gifs : gifs
                })
            })
    }

    // handleChangeQuery(query){
    //     this.setState({
    //         ...this.state,
    //         query : query
    //     })
    // }

    render(){
        return(
            <div>
                <GifSearch onFindQueryClick={(query) => this.handleSearchQuery(query)}/>
                <GifLift gifs={this.state.gifs}/>
            </div>    
        )
    }
}

export default GifListContainer