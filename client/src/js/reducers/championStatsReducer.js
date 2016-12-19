export default function reducer(state={
    championStatsInfo: {},
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "LOAD_CHAMPION_STATS_DATA_SUCCESS": {
        return {
          ...state,
          fetched: true,
          championStatsInfo: action.payload.data,
        }
      }
      case "LOAD_CHAMPION_STATS_DATA_ERROR": {
        return {
          ...state,
          fetched: false,
          errpr: action.payload,
        }
      }
    }

    return state
}
