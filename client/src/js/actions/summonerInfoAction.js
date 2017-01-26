import axios from "axios";

export function fetchSummoner(summonerName) {
  const name = summonerName;

  return function(dispatch) {
    axios.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=2b7a32bd-a9e9-4610-9f46-01b8a881e632")
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
    axios.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + summonerId +"/runes?api_key=2b7a32bd-a9e9-4610-9f46-01b8a881e632")
      .then((response) => {
        dispatch({type: "LOAD_CHAMPION_RUNE_PAGE_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_CHAMPION_RUNE_PAGE_ERROR", payload: err})
      })
  }
}