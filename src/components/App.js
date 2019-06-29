import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component
class App extends React.Component {
  render() {
    return(
      <div>
        { Nav(this.props) }
        <GifListContainer />
      </div>
    )
  }
}

const Nav = () => {
  return (
    <div>
      < NavBar color='black' title="Giphy Search" />
    </div>
  )
}

export default App
