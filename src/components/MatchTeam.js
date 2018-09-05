import React from 'react';
import PropTypes from 'prop-types';
import './MatchTeam.css';


const MatchTeam = ({team_flag,team_name}) => (
    <div className="match-team-container">
        <div className='match-team-image'>
        <img 
            src={team_flag} 
            className="" 
        />
        </div>
        <div className='match-team-name'>
            <h4>
                {team_name}
            </h4>
        </div>
    </div>
);

MatchTeam.propTypes = {
    team_flag: PropTypes.string,
    team_name: PropTypes.string
}

export default MatchTeam;