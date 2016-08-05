import React from 'react';
import Navigation from '../Navigation/Navigation';

import './navigationList.css';

const NavigationList = ({navigation}) => (
    <nav className="nav">
        {navigation.map( nav =>
            <Navigation key={nav.name} name={nav.name} time={nav.time} />
        )}
    </nav>
)

export default NavigationList;
