import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Tab from './index'

describe('<Tab />', () => {

  const data = {
    active: true,
    text: 'Tab1'
  }

  it('adding active class if active prop is true', () => {
    const element = shallow(<Tab active={data.active} text={data.text} />)
    expect(element.find('.active')).to.have.length(1)
  })

  it('not adding active class if active prop is false', () => {
    const element = shallow(<Tab active={!data.active} text={data.text} />)
    expect(element.find('.active')).to.have.length(0)
  })

  it('text is added as class with lowercase', () => {
    const element = shallow(<Tab active={data.active} text={data.text} />)
    expect(element.find(data.text.toLowerCase())).to.have.length(0)
  })

})
