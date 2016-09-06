import React from 'react'
import Navigation from '../Navigation/Navigation'

import './navigationList.css';

const NavigationList = ({ navigation, activeLinkName }) =>  {
    return(
        <nav className="nav">
            {navigation.map( nav =>
                <Navigation
                    key={nav.raceName}
                    name={nav.Circuit.Location.country}
                    time={nav.date}
                    raceId={nav.round}
                    active={nav.Circuit.Location.country.toLowerCase() === activeLinkName.toLowerCase()}
                />
            )}
        </nav>
    )

}



export default NavigationList;
