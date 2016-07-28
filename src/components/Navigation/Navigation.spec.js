import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { expect } from 'chai';

describe('<Navigation />', () => {

    const navData = [
        {imgSrc:"http://vignette3.wikia.nocookie.net/rr3/images/e/e8/Circuit_Catalunya_2007.svg/revision/latest?cb=20160413121045",
        name: "Spanish"},
        {imgSrc: "http://vignette3.wikia.nocookie.net/rr3/images/e/e8/Circuit_Catalunya_2007.svg/revision/latest?cb=20160413121045",
        name: "Italian"}
    ];

    it('renders two navigation elements', () => {
        const wrapper = shallow(<Navigation nav={navData}/>);
        expect(wrapper.find('.nav')).to.have.length(2);
    }),

    it('renders image inside navigation element', () => {
        const wrapper = shallow(<Navigation nav={navData} />);
        const nav = wrapper.find('.nav').first();
        expect(nav.find('img')).to.have.length(1);
    })

});
