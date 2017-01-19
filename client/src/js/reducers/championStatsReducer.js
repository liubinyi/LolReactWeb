import _ from 'lodash';

export default function reducer(state={
    championStatsInfo: {},
    fetched: false,
    error: null,
    singleChamptionstats:{},
    singleItemStats:{},
    singleChampLevelChanged : false,
    itemStatsInfo : {},
    filteredItemStatsInfo : {},
    filteredChamptionStatsInfo : {},
    equippedItemIds : []
  }, action) {

    switch (action.type) {
      case "LOAD_CHAMPION_STATS_DATA_SUCCESS": {
        return {
          ...state,
          fetched: true,
          championStatsInfo: action.payload.data,
          filteredChamptionStatsInfo : action.payload.data
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
          singleChamptionstats:action.payload,
          equippedItemIds:[]
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
      case "filterChamptionsByTag": {
        return {
          ...state,
          filteredChamptionStatsInfo : action.payload
        }
      }
      case "Add_ITEM_TO_CURRENT_CHAMPION": {
        //state should also have a item count that keep track of how many items that a current chamption has
        if (state.equippedItemIds.length < 6) {
          let newItemArray = state.equippedItemIds.concat([action.payload.itemId])
          return {
            ...state,
            singleChamptionstats: action.payload.newChamptionStats,
            equippedItemIds : newItemArray
          }
        }
      }
    }

    return state
}
