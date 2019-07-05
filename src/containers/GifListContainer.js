import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			images: []

		}

	}



handleGifs = (query)  => {


    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())

    .then(data => {

    	const gifUrls = data.data.map(d => {
    	

         return  d.images.original.url
        

    	})

    	this.setState({ images: gifUrls})
    })

    
    }


 


  render (){

  
return (


		 <div className='GifListContainer'>
		 
		 <GifSearch handleGifs={this.handleGifs}/>
		 <GifList   gifsList={this.state.images}/>



 </div>



	)



  }


}
export default GifListContainer;