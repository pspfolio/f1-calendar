import React from 'react'
import './GrandPrixHeader.css'

const GrandPrixHeader = React.createClass({
  getInitialState() {
    return {
      imgLoaded: false
    }
  },

  handleImgLoaded() {
    this.setState({imgLoaded: true})
  },

  render() {
    const styles = {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      //backgroundImage: "url('../../src/images/australia.jpg')"
    }

    return(
      <div className='image-preview' style={styles}>
        <div className='flex-container flex-column'>
          <div className='flex-item'>
            <img className='header-image' src='../../src/images/australia.jpg' alt='national' />
          </div>
          <div className='flex-item'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})

export default GrandPrixHeader
