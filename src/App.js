import React from 'react'
import './App.css'
import Addendums from './components/addendums'
import Livestream from './components/livestream'
import Livechat from './components/livechat'
import Archive from './components/archive'

class App extends React.Component {
  render () {
    return (
      <div>
        <Livestream />
        <Livechat />
        <Addendums />
        <Archive />
      </div>
    );
  }
}

export default App
