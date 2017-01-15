import _ from 'lodash';

export default function reducer(state={
    championStatsInfo: {},
    fetched: false,
    error: null,
    singleChamptionstats:{},
    singleItemStats:{},
    singleChampLevelChanged : false,
    itemStatsInfo : {},
    filteredItemStatsInfo : {}
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

        const filtedItems = _.pickBy(action.payload, function(value, key) {
          return (value.maps[11] == true && !_.isEmpty(value.stats) && value.depth > 1
                  && key != 3671 && key != 3672 && key != 3673 && key != 3675);
        });
         return {
          ...state,
          itemStatsInfo : filtedItems,
          filteredItemStatsInfo: filtedItems
        }
      }
      case "filterItemsByTag": {
        return {
          ...state,
          filteredItemStatsInfo : action.payload
        }
      }
    }

    return state
}
