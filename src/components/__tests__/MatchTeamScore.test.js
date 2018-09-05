import React from 'react';
import {shallow} from 'enzyme';
import MatchTeamScore from '../MatchTeamScore';

describe('<MatchTeamScore />', () => {
    it('renders without crashing', () =>{
        shallow(<MatchTeamScore />);
    })
})