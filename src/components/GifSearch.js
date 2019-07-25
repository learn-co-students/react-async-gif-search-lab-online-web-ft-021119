import React, {PureComponent} from 'react'

class GifSearch extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            temp: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        if (event) {
            event.preventDefault()
            this.props.handleSubmit(this.state.temp)
        }
    }

    componentDidMount() {
        this.handleSubmit()
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="temp" onChange={this.handleChange} value={this.state.temp} />
                <input type="submit" />
            </form>
        )
    }
}

export default GifSearch
