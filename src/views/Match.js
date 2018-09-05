import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchMatches} from '../store/actionCreators'

import MatchTeam from '../components/MatchTeam';
import MatchTeamScore from '../components/MatchTeamScore';
import MatchStatus from '../components/MatchStatus';

import PropTypes from 'prop-types';
import './Match.css'

const mapStateToProps = state => {
    return {
      matches: state.matches
    }
}
  
const mapDispatchToProps = dispatch => ({
fetchAllMatches: (opts={}) => dispatch(fetchMatches(opts))
})

class Match extends Component {

    componentDidMount() {
        this.props.fetchAllMatches;
    }

    render() {
        return (
            <div>
                {matches.map(match => (
                    <div className="match">
                        <MatchTeam />
                        <MatchStatus />
                        <MatchTeamScore />
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Match);