import axios from "axios";

export function fetchChampionStats() {

  return function(dispatch) {
    axios.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?locale=en_US&champData=stats,tags&api_key=2b7a32bd-a9e9-4610-9f46-01b8a881e632")
      .then((response) => {
        dispatch({type: "LOAD_CHAMPION_STATS_DATA_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_CHAMPION_STATS_DATA_ERROR", payload: err})
      })
  }
}

export function fetchChampionRunePage(id) {

  const summonerId = id
  return function(dispatch) {
    axios.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + summonerId +"/runes?api_key=2b7a32bd-a9e9-4610-9f46-01b8a881e632")
      .then((response) => {
        dispatch({type: "LOAD_CHAMPION_RUNE_PAGE_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_CHAMPION_RUNE_PAGE_ERROR", payload: err})
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