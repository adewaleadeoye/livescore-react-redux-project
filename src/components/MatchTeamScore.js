import React from 'react';
import PropTypes from 'prop-types';
import './MatchTeamScore.css';

const MatchTeamScore = ({score}) => (
    <div className="">{score}</div>
)

MatchTeamScore.propTypes = {
    score: PropTypes.string
}

export default MatchTeamScore;