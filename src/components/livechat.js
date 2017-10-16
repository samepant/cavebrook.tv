import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <div className='liveBox'>
        <div className='liveContainer'>
          <iframe id='ytchat' title='chat' type='text/html' 
            src='https://www.youtube.com/live_chat?v=LH0VK2CYQyE&embed_domain=cavebrook.tv'
            frameBorder="0"></iframe>
        </div>
      </div>
    )
  }
}