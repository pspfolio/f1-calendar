import React from 'react';
import ResultTable from '../ResultTable/ResultTable'

const Grandprix = React.createClass({
  render () {
    const { grandprix } = this.props

    let gp;
    if (grandprix) {
      gp = (
        <ResultTable
          headers={[
            {name: 'Pos.', path: 'position'},
            {name: 'Name', path: 'Driver.familyName'},
            {name: 'Constructor', path: 'Constructor.name'},
            {name: 'Points', path: 'points'},
            {name: 'Status', path: 'status'}
          ]}
          results={grandprix.results}
        />
      )

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
