import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchMatches} from '../store/actionCreators'

import MatchTeam from '../components/MatchTeam';
import MatchTeamScore from '../components/MatchTeamScore';
import MatchStatus from '../components/MatchStatus';

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
        this.props.fetchAllMatches();
    }

    render() {
        return (
            <div>
                {this.props.matches.map(match => (
                    <div className="match">
                        <MatchTeam key={`${match.id}-team`} />
                        <MatchStatus key={`${match.id}-status`} />
                        <MatchTeamScore key={`${match.id}-score`} />
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