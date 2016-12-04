import React from 'react'

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
