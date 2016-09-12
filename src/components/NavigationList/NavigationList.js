import React from 'react'
import Navigation from '../Navigation/Navigation'

import './navigationList.css';

const NavigationList = ({ navigation, params }) =>  {
  console.log(this);
    return(
        <nav className="nav">
            {navigation.map( nav =>
                <Navigation
                    key={nav.round}
                    name={nav.country}
                    time={nav.date}
                    raceId={nav.round}
                    active={nav.round === params.raceId}
                />
            )}
        </nav>
    )

}



export default NavigationList;
