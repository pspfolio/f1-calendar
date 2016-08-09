import React from 'react';
import Navigation from '../Navigation/Navigation';

import './navigationList.css';

const NavigationList = ({ navigation, activeLinkName }) =>  {
    return(
        <nav className="nav">
            {navigation.map( nav =>
                <Navigation
                    key={nav.name}
                    name={nav.name}
                    time={nav.time}
                    active={nav.name.toLowerCase() === activeLinkName.toLowerCase()} 
                />
            )}
        </nav>
    )

}



export default NavigationList;
