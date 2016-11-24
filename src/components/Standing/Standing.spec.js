import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Standing from './index'

describe('<Standing />', () => {

  const data = {
    position: '2',
    constructId: 112,
    name: 'Kimi',
    points: '55'
  }

  it('rendering one <Standing /> element', () => {
    const element = shallow(<Standing position={data.position} name={data.name} points={data.points} constructId={data.constructId} />)
    expect(element.find('.driver')).to.have.length(1)
  })

  it('rendering drivername', () => {
    const element = shallow(<Standing position={data.position} name={data.name} points={data.points} constructId={data.constructId} />)
    expect(element.find('.driverName').text()).to.equal(data.name)
  })

  it('rendering position', () => {
    const element = shallow(<Standing position={data.position} name={data.name} points={data.points} constructId={data.constructId} />)
    expect(element.find('.position').text()).to.equal(data.position)
  })

  it('rendering points', () => {
    const element = shallow(<Standing position={data.position} name={data.name} points={data.points} constructId={data.constructId} />)
    expect(element.find('.points').text()).to.equal(data.points)
  })

})


/*
position, name, points, constructId
<li className='driver' key={position}>
    <div className='position'>{position}</div>
    <div className='name'><span className={`${constructId} driverName`}>{name}</span></div>
    <div className='points'>{points}</div>
</li>
*/
