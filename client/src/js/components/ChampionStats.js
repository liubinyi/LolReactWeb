import React from 'react';
import { connect } from "react-redux";

import { fetchChampionStats,fetchChamptionStatsDetails } from "../actions/championStatsAction";

import ImageIcon from './ImageIcon';
import SingleChampionStats from './SingleChampionStats';

import _ from 'lodash';



@connect((store) => {
  return {
    championStats: store.championStats
  };
})


export default class ChampionStats extends React.Component {

	getChampionStats() {
		//event.preventDefault();
		this.props.dispatch(fetchChampionStats());
	}


	getSingleChampionAbilities(event) {
		//this.props.dispatch(fetchChamptionStatsDetails(stats))

		//this.props.championStats.championStatsInfo[event.target.className].stats
		
		event.preventDefault();
		const key = [event.target.className];
		const stats = this.props.championStats.championStatsInfo[key].stats;
		//this.props.dispatch(fetchChamptionStatsDetails(stats))
		console.log("OKKKKK")
	}


	render() {
		const {championStats} = this.props;

		if (championStats.fetched == false) {
			this.getChampionStats();
			return (
			<div>			
				<h1> fetching champion stats </h1>
			</div>
			);
		}

		// if (championStats.singleChamptionstats.hp != null) {
		// 	return (
		// 	 <h1> jax </h1>
		// 	);	
		// }

		return (
			<SingleChampionStats championStatsInfo={championStats.championStatsInfo} event={this.getSingleChampionAbilities.bind(this)} />
		);		
	}
}