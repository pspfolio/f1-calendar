import { connect } from 'react-redux';
import NavigationList from '../components/NavigationList/NavigationList';

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation
    }
}

const NavigationContainer = connect(mapStateToProps, null)(NavigationList);

export default NavigationContainer;
