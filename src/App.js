import React from 'react'
import './App.css'
import Logo from './components/logo'
import Campfire from './components/campfire'
import Addendums from './components/addendums'
import Soon from './components/soon.js'
import Livestream from './components/livestream'

class App extends React.Component {
  render () {
    return (
      <div>
        <Livestream />
        <Addendums />
        <Soon />
      </div>
    );
  }
}

export default App
