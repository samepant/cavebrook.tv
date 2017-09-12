import React from 'react'
import './soon.css'

export default class extends React.Component {
  render () {
    return (
      <div className='soon'>
        <svg viewBox='0 0 200 200' className='circleText'>
          <filter id="dropshadow1" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="-2" dy="5" result="offsetblur"/>
            <feMerge> 
              <feMergeNode/> 
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="dropshadow2" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="-2" dy="-4" result="offsetblur"/>
            <feMerge> 
              <feMergeNode/> 
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="dropshadow3" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="4" dy="2" result="offsetblur"/>
            <feMerge> 
              <feMergeNode/> 
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <path id='textPath'
                d='M 0,-1
                  C 0.5523, -1   1, -0.5523    1,0
                  C 1, 0.5523    0.5523, 1     0,1
                  C -0.5523, 1   -1, 0.5523    -1,0
                  C -1, -0.5523  -0.5523, -1   0,-1'
                fill='none' transform='translate(100,100) scale(90,90)'/>
          <text>
            <textPath xlinkHref='#textPath' startOffset='0%' style={{filter: 'url(#dropshadow1)'}}>
              COMING SOON
            </textPath>

            <textPath xlinkHref='#textPath' startOffset='33%' style={{filter: 'url(#dropshadow2)'}}>
              COMING SOON
            </textPath>

            <textPath xlinkHref='#textPath' startOffset='63%' style={{filter: 'url(#dropshadow3)'}}>
              COMING SOON
            </textPath>
          </text>
        </svg>
      </div>
    )
  }
}