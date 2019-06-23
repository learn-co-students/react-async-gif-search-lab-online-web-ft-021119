import React, {Component} from 'react'

class GifList extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <ul>
                {this.props.gifs.map((gif) => <li><img src={gif}/></li>)}
            </ul>
        )
    }
}

export default GifList