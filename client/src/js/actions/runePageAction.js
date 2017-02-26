//loop through runpage hash and fire up request to get all the rune stats
//next step is to concat them together
import axios from "axios";

export function fetchSingleRuneStats(runeId) {

  return function(dispatch) {

  	const url = "https://lolyasuo.herokuapp.com/rune/"+runeId

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
