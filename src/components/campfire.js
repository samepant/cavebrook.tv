import React from 'react'
import './campfire.css'

export default class extends React.Component {
  render () {
    return (
      <div className='campfire'>
        <svg height='1' shapeRendering='crispEdges'>
          <filter id='displacementFilter2'>
            <feTurbulence type='turbulence' numOctaves='6' result='turbulence' baseFrequency='0.022225'>
            </feTurbulence>
            <feDisplacementMap in2='turbulence' in='SourceGraphic' scale='20' xChannelSelector='R' yChannelSelector='G'></feDisplacementMap>
            <feGaussianBlur stdDeviation='2'  result='blur'/>
          </filter>
        </svg>
        <div id='glow'></div>
        <div className='log' id='log1'></div>
        <div className='log' id='log2'></div>
        <div className='ember' style={{filter: 'url(#displacementFilter2)'}} id='ember1'></div>
        <div className='ember' style={{filter: 'url(#displacementFilter2)'}} id='ember2'></div>
        <div className='ember' style={{filter: 'url(#displacementFilter2)'}} id='ember3'></div>
        <div className='ember' style={{filter: 'url(#displacementFilter2)'}} id='ember4'></div>
      </div>
    )
  }
}