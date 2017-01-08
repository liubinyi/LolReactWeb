import _ from 'lodash';

export default function reducer(state={
    championStatsInfo: {},
    fetched: false,
    error: null,
    singleChamptionstats:{},
    singleItemStats:{},
    singleChampLevelChanged : false,
    itemStatsInfo : {}
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
      case "LOAD_CHAMPION_STATS_DETAILS": {
        return {
           ...state,
          fetched: true,
          singleChamptionstats:action.payload
        }
      }
      case "LOAD_ITEM_STATS_DETAILS": {
        return {
          ...state,
          singleItemStats: action.payload
        }
      }
      case "LOAD_ITEM_STATS_DATA_SUCCESS" : {

        const filtedItems = _.filter(Object.values(action.payload), {maps: {11:true}});
        
         return {
          ...state,
          itemStatsInfo : action.payload
        }
      }
    }

    return state
}
