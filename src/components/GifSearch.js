import React, {Component} from 'react';


class GifSearch extends Component{
	constructor(props){
		super(props);
		this.querySubmit = this.querySubmit.bind(this)
		this.state={
			gifSearch: ""
		}
	}

	// gifList = () =>{

	// 	return this.props.handleGifs
	// }
	handleChange=(e) =>{
		this.setState({
			[e.target.name]: e.target.value
		})
}
querySubmit = (event) => {
	event.preventDefault()

	this.props.handleGifs(this.state.gifSearch)


}
	render(){
		return (
			<form onSubmit={this.querySubmit}>
			<input name={"gifSearch"} value={this.state.gifSearch} onChange={this.handleChange} ></input>
			<button>Find GIFs</button>
			</form>



			)



	}


} 
export default GifSearch