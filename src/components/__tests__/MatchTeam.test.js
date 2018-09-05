import React from 'react';
import {shallow} from 'enzyme';
import MatchTeam from '../MatchTeam';

describe('<MatchTeam />', () => {
    it('renders without crashing', () =>{
        shallow(<MatchTeam />);
    })
})