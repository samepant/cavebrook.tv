import React from 'react'
import contentfulClient from '../utilities/contentful'
import './storeSign.css'

export default class extends React.Component {
  constructor () {
    super()

    this.state = {
      isOpen: false
    }

    this.getStatus = this.getStatus.bind(this)
  }

  componentWillMount () {
    const currentStatus = setInterval(this.getStatus, 10000)
    this.getStatus()
  }

  getStatus () {
    contentfulClient.getEntry('4LrunBQ3qgOAM2oe68Yyui')
      .then(res => {
        this.setState({
          isOpen: res.fields.isOpen
        })
      })
      .catch(console.error)
  }

  renderIsClosed () {
    return (
      <div className='storeStatus'>
        <img className='logo' src='/thecavebw.png' alt='logo'/>
        <span className='textStatus'>the cave is closed :(</span>
        <img className='storeImage' src='/closedstorefront.gif' alt='the store itself'/>
      </div>
    )
  }

  renderIsOpen () {
    return (
      <div className='storeStatus'>
        <img className='logo open' src='/cave.png' alt='logo'/>
        <span className='textStatus'>the cave is open :)</span>
        <img className='storeImage' src='/storefront.gif' alt='the store itself'/>
      </div>
    )
  }

  render () {
    if (this.state.isOpen) {
      return this.renderIsOpen()
    } else {
      return this.renderIsClosed()
    }
  }
}