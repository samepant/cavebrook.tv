import React from 'react'
import './livestream.css'

export default class extends React.Component {
  render () {
    return (
      <div className='liveBox'>
        <div className='liveContainer'>
          <iframe id="ytplayer" type="text/html" 
            src="https://www.youtube.com/embed/live_stream?channel=UC1bDjRkcyAMVfpS4tpyoe6g"
            frameborder="0"></iframe>
        </div>
      </div>
    )
  }
}