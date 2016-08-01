import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { expect } from 'chai';

describe('<Navigation />', () => {

    const grandprix = {
        time:'22 - 24 Jul',
        name: 'Spanish'
    };

    it('renders time inside navigation element', () => {
        const wrapper = shallow(<Navigation
            name={grandprix.name}
            time={grandprix.time} />);

        const nav = wrapper.find('.nav-item');
        expect(nav.find('time')).to.have.length(1);
    })

    it('renders racetrack name inside navigation elment', () => {
        const wrapper = shallow(<Navigation
             name={grandprix.name}
             time={grandprix.time} />);

        const firstNavElement = wrapper.find('.nav-item');
        expect(firstNavElement.find('p').text()).to.eql('Spanish');
    })

});
