import React from 'react'
import { connect } from 'react-redux'
import { fetchGrandPrix } from '../actions'
import GrandPrix from '../components/GrandPrix/GrandPrix'

const GrandprixApp = React.createClass({

  componentDidMount() {
    console.log(this.props.params)
    const { raceId } = this.props.params
    this.getData(raceId)
  },

  componentWillReceiveProps(props) {
    const { raceId } = props.params
    this.getData(raceId)
  },

  getData(id) {
    const { dispatch } = this.props

    // TODO get race details by raceId
    //dispatch(setGrandPrix('test'));
    // dispatch with grandprix name. In action make sure only fetch if needed
    dispatch(fetchGrandPrix(id))
  },

  render () {
    const { grandprix } = this.props;
    return(
      <GrandPrix grandprix={grandprix} />
    )
  }
})

const getGrandprix = (grandprixs, location) => {
  var result = grandprixs.filter((gp) => gp.name.toLowerCase() === location.toLowerCase());
  return result[0];
}

function mapStateToProps(state, ownProps) {
    return {
        grandprix: getGrandprix(state.grandprixs, ownProps.params.name)
    }
}

const GP = connect(mapStateToProps)(GrandprixApp);

export default GP;
