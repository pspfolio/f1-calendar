import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';
import { expect } from 'chai';

describe('<Info />', () => {

    it('renders h2 element', () => {
        const wrapper = shallow(<Info/>);
        expect(wrapper.find('h2')).to.have.length(1);
    })
});
