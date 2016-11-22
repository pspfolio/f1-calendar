import React from 'react'
import Standings from '../../containers/Standings'
import GrandPrixCard from '../../containers/GrandPrixCard'

import './frontpage.css'

const Frontpage = React.createClass({
  render() {
    return (
      <div className='frontpage-container'>
        <Standings />
        <GrandPrixCard />
      </div>
    )
  }
})

export default Frontpage
