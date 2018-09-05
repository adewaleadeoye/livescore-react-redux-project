import React from 'react';
import {shallow} from 'enzyme';
import Match from '../Match';

describe('<Match />', () => {
    it('renders without crashing', () => {
        shallow(<Match />);
    })
})