import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ResultTable from './ResultTable'

describe('<ResultTable />', () => {

  const headers = [
    {name: 'Pos.', path: 'position'},
    {name: 'Constructor', path: 'constructor.name'},
    {name: 'Points', path: 'points'}
  ]

  const results = [{
      position: '1',
      constructor: {name: 'Test1'},
      points: '1'
    },
    {
      position: '2',
      constructor: {name: 'Test2'},
      points: '2'
    },
  ]

  it('renders table element', () => {
    const element = shallow(<ResultTable headers={headers} results={results} />)
    expect(element.find('table')).to.have.length(1)
  })

  it('renders multiple tbody table rows', () => {
    const element = shallow(<ResultTable headers={headers} results={results} />)
    expect(element.find('tbody tr')).to.have.length(2)
  })

  it('renders thead table rows', () => {
    const element = shallow(<ResultTable headers={headers} results={results} />)
    expect(element.find('thead tr')).to.have.length(1)
  })

})
