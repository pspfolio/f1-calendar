import React from 'react'
import { connect } from 'react-redux'
import GrandPrixCards from '../components/GrandPrixCards'

function mapStateToProps(state) {
  return {
    data: state.navigation
  }
}

export default connect(mapStateToProps)(GrandPrixCards)
