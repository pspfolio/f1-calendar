import React from 'react';
import { shallow } from 'enzyme';
import NavigationList from './NavigationList';
import { expect } from 'chai';

describe('<NavigationList />', () => {

    const navData = [
        {time:'22 - 24 Jul',
        name: 'Spanish'},
        {time: '15 - 18 Oct',
        name: 'Italian'}
    ];

    it('renders two navigation elements', () => {
        const wrapper = shallow(<NavigationList nav={navData}/>);
        expect(wrapper.find('.nav-item')).to.have.length(2);
    }),

    it('renders time inside navigation element', () => {
        const wrapper = shallow(<NavigationList nav={navData} />);
        const nav = wrapper.find('.nav-item').first();
        expect(nav.find('time')).to.have.length(1);
    }),

    it('renders racetrack name inside navigation elment', () => {
        const wrapper = shallow(<NavigationList nav={navData} />);
        const firstNavElement = wrapper.find('.nav-item').first();
        const lastNavElement = wrapper.find('.nav-item').last();
        expect(firstNavElement.find('p').text()).to.eql('Spanish');
        expect(lastNavElement.find('p').text()).to.eql('Italian');
    })

});
