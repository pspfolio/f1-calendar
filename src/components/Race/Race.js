import React from 'react'
import ResultTable from '../ResultTable/ResultTable'

const Race =  ({ results }) => (
  <ResultTable
    headers={[
      {name: 'Pos.', path: 'position'},
      {name: 'Name', path: 'Driver.familyName'},
      {name: 'Constructor', path: 'Constructor.name'},
      {name: 'Points', path: 'points'},
      {name: 'Status', path: 'status'}
    ]}
    results={ results }
  />
)

export default Race
