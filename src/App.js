import React from 'react'
import './App.css'
import Addendums from './components/addendums'
import Livestream from './components/livestream'
import Archive from './components/archive'

class App extends React.Component {
  render () {
    return (
      <div>
        <Livestream />
        <Addendums />
        <Archive />
      </div>
    );
  }
}

export default App
