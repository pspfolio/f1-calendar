import React from 'react';
import NavigationList from '../../containers/NavigationList';
import './main.css';

const Main = React.createClass({
    render() {
        return(
            <div className="container">
                <NavigationList className="nav"/>
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        )
    }
});

export default Main;
