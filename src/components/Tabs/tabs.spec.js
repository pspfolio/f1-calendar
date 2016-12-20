import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Tabs from './index'
import Tab from '../Tab'

describe('<Tabs />', () => {

  it(`Rendering 1 active children`, () => {
    const element = shallow(
    <Tabs>
      <Tab name='test1' />
      <Tab name='test2' />
    </Tabs>)
    expect(element.find(Tab)).to.have.length(1)
  })

  it('setting active class to first element by default', () => {
    const element = shallow(
    <Tabs>
      <Tab name='test1' id='test1' />
      <Tab name='test2' id='test2'/>
    </Tabs>)
    expect(element.find('.active')).to.have.length(1)
  })

})
