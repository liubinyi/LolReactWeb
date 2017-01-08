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
	render() {
		const {championStats,singleChamptionstats,singleItemStats} = this.props;

		const divStyle = {
			color: '#00FF00',
			backgroundColor: 'black',
			float: 'right',
		}

		return (
			<div>
				<ItemImageIcon itemKey={singleItemStats.id} />
				<h4> {singleItemStats.description} </h4>
			</div>
		)
	}
}