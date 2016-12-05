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
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAqgAwAEAAAAAQAAAAYAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAAYACgMBIgACEQADEQD/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/3QAEAAH/2gAMAwEAAhEDEQA/AOJvtSmvIUzsQrIxwqng43ZVy5YZHykY7DBFZy3gCgGPJAAyCgB/Dyzj6ZNRt/q/+Bt/6BVGvehCCVlFWWx5k6k5Pmcm21qz/9k=')"

    }

    return(
      <div className='image-preview' style={styles}>
        <img
          className={this.state.imgLoaded ? 'image image-loaded' : 'image'}
          src='https://designedbynatalie.files.wordpress.com/2015/01/australianflag.jpg'
          onLoad={this.handleImgLoaded}/>
      </div>
    )
  }
})

export default GrandPrixHeader
