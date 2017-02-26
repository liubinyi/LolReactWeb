import axios from "axios";

export function fetchChampionStats() {

  return function(dispatch) {
    axios.get("https://lolyasuo.herokuapp.com/allChampion")
      .then((response) => {
        dispatch({type: "LOAD_CHAMPION_STATS_DATA_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_CHAMPION_STATS_DATA_ERROR", payload: err})
      })
  }
}

export function fetchChamptionStatsDetails(stats) {
  return {
    type: 'LOAD_CHAMPION_STATS_DETAILS',
    payload: stats
  }
}

export function fetchItemStatsDetails(itemStats) {
  return {
    type: 'LOAD_ITEM_STATS_DETAILS',
    payload: itemStats
  }
}

export function filterChamptionsByTag(champions) {
  return {
    type: 'filterChamptionsByTag',
    payload: champions
  }
}

export function filterItemsByTag(items) {
  return {
    type: 'filterItemsByTag',
    payload: items
  }
}
