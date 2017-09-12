import React from 'react'
import './App.css'
import Logo from './components/logo'
import Campfire from './components/campfire'
import Addendums from './components/addendums'
import Soon from './components/soon.js'

class App extends React.Component {
  render () {
    return (
      <div>
        <Logo />
        <Campfire />
        <Addendums />
        <Soon />
      </div>
    );
  }
}

export default App
