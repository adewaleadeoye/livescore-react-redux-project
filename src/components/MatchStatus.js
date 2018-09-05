import React from 'react';
import PropTypes from 'prop-types';
import './MatchStatus.css';

const MatchStatus = ({match_status}) => (
    <div className="matchStatus">{match_status}</div>
)

MatchStatus.propTypes = {
    match_status:PropTypes.string
}

export default MatchStatus;