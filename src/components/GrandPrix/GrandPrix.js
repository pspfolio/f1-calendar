import React from 'react';

const Grandprix = React.createClass({
  render () {
    const { grandprix } = this.props

    let gp;
    if (grandprix) {
      gp = <h2>{grandprix.name}</h2>
    } else {
      gp = <h2>Not found</h2>
    }
    
    return (
      <div className="grand-prix">
        {gp}
      </div>
    )
  }
})

export default Grandprix;
