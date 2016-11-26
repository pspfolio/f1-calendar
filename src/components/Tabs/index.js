import React from 'react'
import Tab from '../Tab'
import './tabs.css'

const Tabs = React.createClass({

  render() {
    return (
      <div className="tabs">
        <div className="tab-results">
          {
            this.props.tabs.map((tab) => {
              return <Tab key={tab.name} handleClick={tab.handleClick} active={tab.index === this.props.activeIndex} text={tab.name} />
            })
          }
        </div>
      </div>
    )
  }
})

export default Tabs
