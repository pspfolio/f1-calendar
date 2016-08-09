import { connect } from 'react-redux';
import NavigationList from '../components/NavigationList/NavigationList';

const mapStateToProps = (state, ownProps) => {
    return {
        navigation: state.navigation,
        activeLinkName: ownProps.params.name ? ownProps.params.name : ''
    }
}

const NavigationContainer = connect(mapStateToProps)(NavigationList);

export default NavigationContainer;
