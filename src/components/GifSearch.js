import React, {Component} from 'react'

class GifSearch extends Component{
    constructor(props){
        super(props)
        this.state = {
            query : ''
        }
    }

    handleChange(event){
        event.persist()
        this.setState({
            [event.target.name] : event.target.value
        })
        // this.props.onChangeType(event.target.value)
    }

    render(){
        return(
            <div>
                <input type="text" name="query" value={this.state.query} onChange={(event) => this.handleChange(event)}></input>
                <button onClick={() => this.props.onFindQueryClick(this.state.query)}>Find Gifs!</button>
            </div>
            
        )
    }
}

export default GifSearch