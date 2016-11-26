import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Tabs from './index'
import Tab from '../Tab'

describe('<Tabs />', () => {

  const data = {
    activeIndex: 0,
    tabs: [
      {
        index: 0,
        name: 'Qualifying',
      },
      {
        index: 1,
        name: 'Race',
      },
      {
        index: 2,
        name: 'Race',
      },
    ]
  }

  it(`Rendering ${data.tabs.length} Tab elements`, () => {
    const element = shallow(<Tabs tabs={data.tabs} />)
    expect(element.find(Tab)).to.have.length(data.tabs.length)
  })

})
