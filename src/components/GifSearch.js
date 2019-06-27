import React, { PureComponent } from 'react'



export default class GifSearch extends PureComponent {
   constructor(props) {
      super(props)
   
      this.state = {query: "party"}
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   handleSubmit = (event) => {
      if (event) event.preventDefault()
      this.props.handleSubmit(this.state.query)
   }

   componentDidMount() {
      this.handleSubmit()
   }
   

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <input type="text" name="query" onChange={this.handleChange}/>
               <input type="submit"/>
            </form>
         </div>
      )
   }
}
