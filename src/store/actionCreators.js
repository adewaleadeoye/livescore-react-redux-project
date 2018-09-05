import * as types from './types';

const config = require('../config')

const host = config.url;
const today = new Date();
let fDate = today.getFullYear+'-'+today.getMonth+'-'+today.getDay;
export const fetchMatches = ({ fromDate = fDate, toDate=fDate}) => ({
  type: types.FETCH_MATCHES,
  payload: {},
  meta: {
    type: 'api',
    url: host + '/?action='+config.livescore+'&APIKey='+config.apiKey+'&league_id='+leagueId+'&from='+fromDate+'&to='+toDate
  }
})