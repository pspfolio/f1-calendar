import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NavigationList from './NavigationList';
import Navigation from '../Navigation/Navigation';

describe('<NavigationList />', () => {

    const navData = [
        {time:'22 - 24 Jul',
        name: 'Spanish'},
        {time: '15 - 18 Oct',
        name: 'Italian'}
    ];

    it('renders two navigation components', () => {
        const wrapper = shallow(<NavigationList nav={navData}/>);
        expect(wrapper.find(Navigation)).to.have.length(2);
    })
});
