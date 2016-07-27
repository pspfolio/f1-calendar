import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { expect } from 'chai';

describe('<Navigation />', () => {

    it('renders two navigation elements', () => {
        const data = [
            {imgSrc:"http://vignette3.wikia.nocookie.net/rr3/images/e/e8/Circuit_Catalunya_2007.svg/revision/latest?cb=20160413121045",
            name: "Spanish"},
            {imgSrc: "http://vignette3.wikia.nocookie.net/rr3/images/e/e8/Circuit_Catalunya_2007.svg/revision/latest?cb=20160413121045",
            name: "Italian"}
        ];
        const wrapper = shallow(<Navigation nav={data}/>);
        expect(wrapper.find('.nav')).to.have.length(2);
    })
});
