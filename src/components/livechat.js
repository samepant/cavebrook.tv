import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <div className='chatBox'>
        <div className='liveContainer'>
          <iframe id='ytchat' title='chat' type='text/html' 
            src='https://www.youtube.com/live_chat?v=n9NQib9dQBs&embed_domain=cavebrook.tv'
            frameBorder="0"></iframe>
        </div>
      </div>
    )
  }
}