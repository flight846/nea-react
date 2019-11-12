import { combineReducers } from 'redux';
import ehiAnalyst from './ehiAnalyst/reducer';
import roOfficer from './roOfficer/reducer';
import roTeamLeader from './roTeamLeader/reducer';
import rcuTeamLeader from './rcuTeamLeader/reducer';
export default combineReducers({
  ehiAnalyst,
  roOfficer,
  roTeamLeader,
  rcuTeamLeader,
});
