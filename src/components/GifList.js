import React,{Component} from 'react';
class GifList extends Component {


	renderGifs = () => {
		
return this.props.gifsList.map(g => {
	return (<li>
	<img src={g} alt =""/>

	</li>)

})

	}
	render(){
 return (
		<ul>
		
		{this.renderGifs()}


		</ul>

 	)


	}

}



export default GifList