import { connect } from 'react-redux';
import NavigationList from '../components/NavigationList/NavigationList';

const mapStateToProps = (state, ownProps) => {
    return {
        navigation: state.navigation
    }
}

const NavigationContainer = connect(mapStateToProps)(NavigationList);

export default NavigationContainer;
