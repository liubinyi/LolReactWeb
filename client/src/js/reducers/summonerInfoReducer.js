export default function reducer(state={
    summonerInfo: {
      id: 0,
      name: "",
      profileIconId: 0,
      revisionDate: "",
      summonerLevel:0
    },
    summonerRunePage: {},
    runePageLoaded: false,
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
      case "LOAD_CHAMPION_RUNE_PAGE_SUCCESS": {
        return {
          ...state,
          runePageLoaded : true,
          summonerRunePage: action.payload
        }
      }
    }

    return state
}
