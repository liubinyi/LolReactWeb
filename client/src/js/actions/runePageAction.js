//loop through runpage hash and fire up request to get all the rune stats
//next step is to concat them together
import axios from "axios";

export function fetchSingleRuneStats(runeId) {

  return function(dispatch) {

  	const url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/rune/" + runeId +"?locale=en_US&runeData=stats&api_key=2b7a32bd-a9e9-4610-9f46-01b8a881e632";

    axios.get(url)
      .then((response) => {
        dispatch({type: "LOAD_SINGLE_RUNE_STATS_DATA_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_SINGLE_RUNE_STATS_DATA_ERROR", payload: err})
      })
  }
}

export function displayRunePageDetails(details) {

  let data = {
    stats: details.stats,
    name : details.name
  }

  return {
    type: "DISPLAY_RUNE_PAGE_DETAILS",
    payload: data
  }
}