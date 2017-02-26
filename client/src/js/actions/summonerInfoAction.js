import axios from "axios";

export function fetchSummoner(summonerName) {
  const name = summonerName;

  return function(dispatch) {
    axios.get("https://lolyasuo.herokuapp.com/summonerName/"+name)
      .then((response) => {
        dispatch({type: "LOAD_DATA_SUCCESS", payload: response.data[name.toLowerCase()]})
      })
      .catch((err) => {
        dispatch({type: "LOAD_DATA_ERROR", payload: err})
      })
  }
}

export function fetchSummonerRunePage(id) {

  const summonerId = id
  return function(dispatch) {
    axios.get("https://lolyasuo.herokuapp.com/summonerId/"+id)
      .then((response) => {
        dispatch({type: "LOAD_CHAMPION_RUNE_PAGE_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_CHAMPION_RUNE_PAGE_ERROR", payload: err})
      })
  }
}
