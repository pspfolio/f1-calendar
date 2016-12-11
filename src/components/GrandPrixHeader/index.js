import React from 'react'
import './GrandPrixHeader.css'

const GrandPrixHeader = React.createClass({
  render() {
    const imgSrc = `../../src/images/${this.props.headerImgPath}`
    return(
      <div className='image-preview'>
        <div className='flex-container flex-column'>
          <div className='flex-item'>
            <img className='header-image' src={imgSrc} alt='national' />
          </div>
          <div id='race-header' className='flex-item'>
            <h3 className='zero-margin light-text'>{ this.props.circuitName }</h3>
          </div>
        </div>
      </div>
    )
  }
})

export default GrandPrixHeader
