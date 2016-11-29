import React from 'react'
import './tab.css'

const Tab = React.createClass({
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
})

export default Tab;
