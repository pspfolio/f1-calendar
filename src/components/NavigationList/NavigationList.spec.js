import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NavigationList from './NavigationList';
import Navigation from '../Navigation/Navigation';

describe('<NavigationList />', () => {

    const navData = [
        {
          date:'22 - 24 Jul',
          raceName: 'Spanish'
        },
        {
          date: '15 - 18 Oct',
          raceName: 'Italian'
        }
    ];

    /*
    name={nav.Circuit.Location.country}
    raceId={nav.round}
    */

    it('renders two navigation components', () => {
        const wrapper = shallow(<NavigationList navigation={navData} activeLinkName={'test'}/>);
        expect(wrapper.find(Navigation)).to.have.length(2);
    })
});
