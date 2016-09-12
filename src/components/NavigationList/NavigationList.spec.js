import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NavigationList from './NavigationList';
import Navigation from '../Navigation/Navigation';

describe('<NavigationList />', () => {

    const navData = [
        {
          country: 'Australia',
          date: '2016-03-20',
          round: '1'
        },
        {
          country: 'China',
          date: '2016-04-20',
          round: '2'
        }
    ];

    const params = {
      raceId: '1'
    }

    it('renders two navigation components', () => {
      const wrapper = shallow(<NavigationList navigation={navData} params={params} />);
      expect(wrapper.find(Navigation)).to.have.length(2);
    })
});
