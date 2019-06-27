import React, { Component } from 'react'

export default class GifSearch extends Component {
   constructor(props) {
      super(props)
   
      this.state = {query: "party"}
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   componentDidMount() {
      console.log(`GifSearch ${this.props}`)
   }
   
   render() {
      return (
         <div>
            <form onSubmit={this.props.handleSubmit(this.state.query)}>
               <input type="text" name="query" onChange={this.handleChange}/>
               <input type="submit"/>
            </form>
         </div>
      )
   }
}
