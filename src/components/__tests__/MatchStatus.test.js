import React from 'react';
import {shallow} from 'enzyme';
import MatchStatus from '../MatchStatus';

describe('<MatchStatus />', () => {
    it('renders without crashing', ()=>{
        shallow(<MatchStatus />);
    })
})