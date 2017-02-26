import axios from "axios";

export function fetchItemStats() {

  return function(dispatch) {
    axios.get("https://lolyasuo.herokuapp.com/allItem")
      .then((response) => {
        dispatch({type: "LOAD_ITEM_STATS_DATA_SUCCESS", payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: "LOAD_ITEM_STATS_DATA_ERROR", payload: err})
      })
  }
}


export function ItemAddedToCurrentChamption(itemId, newChamptionStats) {

	let data = {
		itemId: itemId,
		newChamptionStats : newChamptionStats
	}

	return {
		type: "Add_ITEM_TO_CURRENT_CHAMPION",
		payload: data
	}
}
