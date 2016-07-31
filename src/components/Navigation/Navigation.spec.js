import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { expect } from 'chai';

describe('<Navigation />', () => {

    const navData = [
        {time:'22 - 24 Jul',
        name: 'Spanish'},
        {time: '15 - 18 Oct',
        name: 'Italian'}
    ];

    it('renders two navigation elements', () => {
        const wrapper = shallow(<Navigation nav={navData}/>);
        expect(wrapper.find('.nav')).to.have.length(2);
    }),

    it('renders time inside navigation element', () => {
        const wrapper = shallow(<Navigation nav={navData} />);
        const nav = wrapper.find('.nav').first();
        expect(nav.find('time')).to.have.length(1);
    }),

    it('renders racetrack name inside navigation elment', () => {
        const wrapper = shallow(<Navigation nav={navData} />);
        const firstNavElement = wrapper.find('.nav').first();
        const lastNavElement = wrapper.find('.nav').last();
        expect(firstNavElement.find('p').text()).to.eql('Spanish');
        expect(lastNavElement.find('p').text()).to.eql('Italian');
    })

});
