import React from 'react'
import googleMaps from 'google-maps'

const GoogleMaps = React.createClass({
  componentDidMount() {
    console.log("component did mount")
  },

  render() {
    return (
      <div className='map'>
        Tähän tulee kartta
      </div>
    )
  }
})

export default GoogleMaps
