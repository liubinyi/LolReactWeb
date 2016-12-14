export default function reducer(state={
    summonerInfo: {
      id: 0,
      name: "",
      profileIconId: 0,
      revisionDate: "",
      summonerLevel:0
    },
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "LOAD_DATA_SUCCESS": {
        return {
          ...state,
          fetched: true,
          summonerInfo: action.payload,
        }
      }
      case "LOAD_DATA_ERROR": {
        return {
          ...state,
          fetched: false,
          errpr: action.payload,
        }
      }
    }

    return state
}
