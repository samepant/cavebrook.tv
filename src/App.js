import React from 'react'
import './App.css'
import Addendums from './components/addendums'
import Livestream from './components/livestream'
import Archive from './components/archive'
import StoreSign from './components/storeSign'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className='sidebyside'>
          <StoreSign />
          <Livestream />
        </div>
        <Addendums />
        <Archive />
      </div>
    );
  }
}

export default App
