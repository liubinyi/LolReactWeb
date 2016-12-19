import { combineReducers } from "redux"
import summonerInfo from "./summonerInfoReducer"
import championStats from "./championStatsReducer"

export default combineReducers({
  summonerInfo,
  championStats,
})
