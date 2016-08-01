import React from 'react';
import Navigation from '../Navigation/Navigation';

import './navigationList.css';

const NavigationList = React.createClass({
    render() {
        const { nav } = this.props;
        return(
            <nav className="nav">
                {nav.map( nav =>
                    <Navigation key={nav.name} name={nav.name} time={nav.time} />
                )}
            </nav>
        )
    }
});

export default NavigationList;
