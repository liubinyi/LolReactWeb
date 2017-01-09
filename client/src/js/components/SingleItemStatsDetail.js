import React from 'react';
import { connect } from "react-redux";

import ItemImageIcon from './ItemImageIcon';

import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})


export default class SingleItemStatsDetail extends React.Component {

	applyItemStats(itemId) {

	}

	render() {
		const {championStats,singleChamptionstats,singleItemStats} = this.props;
		if (singleItemStats.id == null) {
			return(
				<p> Click Any Item To See The Affect </p>
			);
		} else {
			return (
				<div>
					<ItemImageIcon itemKey={singleItemStats.id} />
					<h4> {singleItemStats.name} </h4>
					<p> {singleItemStats.description} </p>
					<Button bsStyle="success"> Apply Item Effect </Button>
				</div>
			)
		}
	}
}