import React from 'react'
import './tabs.css'

const Tabs = React.createClass({
  getInitialState() {
    return {
      selected: 0
    }
  },

  handleClick(index) {
    this.setState({selected: index})
  },

  render() {
    return (
      <div className="tabs-container">
        <div className="tabs-flex">
          <div className="tab-results-flex">
            {
              this.props.children.map((item, index) => {
                return
                <h3 className={`tab ${item.props.name.toLowerCase()} ${index === this.state.selected ? 'active' : ''}`}
                  key={index}
                  onClick={this.handleClick.bind(this, index)}>{item.props.name}
                </h3>
              })
            }
          </div>
        </div>
        <div className="tabs-flex">
          {this.props.children[this.state.selected]}
        </div>
      </div>
    )
  }
})

export default Tabs
