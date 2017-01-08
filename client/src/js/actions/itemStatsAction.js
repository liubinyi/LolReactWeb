import axios from "axios";

export function fetchItemStats() {

  return function(dispatch) {
    axios.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?locale=en_US&itemListData=maps,tags&api_key=2b7a32bd-a9e9-4610-9f46-01b8a881e632")
      .then((response) => {
        dispatch({type: "LOAD_ITEM_STATS_DATA_SUCCESS", payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_ITEM_STATS_DATA_ERROR", payload: err})
      })
  }
}