import React from 'react';
import { connect } from "react-redux";

import { fetchChampionStats,fetchChamptionStatsDetails } from "../actions/championStatsAction";

import ImageIcon from './ImageIcon';
import SingleChampionStats from './SingleChampionStats';
import SinglechamptionStatsDetail from './SinglechamptionStatsDetail';

import _ from 'lodash';



@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.singleChamptionstats
  };
})


export default class ChampionStats extends React.Component {

	getChampionStats() {
		//event.preventDefault();
		this.props.dispatch(fetchChampionStats());
	}


	getSingleChampionAbilities(event) {

		event.preventDefault();
		const key = [event.target.className];
		const stats = this.props.championStats.championStatsInfo[key].stats;
		stats.level = 1;
		this.props.dispatch(fetchChamptionStatsDetails(stats))
		//console.log("OKKKKK")
	}


	render() {
		const {championStats,singleChamptionstats} = this.props;

		if (championStats.fetched == false) {
			this.getChampionStats();
			return (
			<div>			
				<h1> fetching champion stats </h1>
			</div>
			);
		}

		const singleStyle = {
	 	 float: 'right'
		}

		if (championStats.singleChamptionstats.hp != null) {
			return (
				<div>
					<SinglechamptionStatsDetail style={singleStyle} champAbility = {championStats.singleChamptionstats} />
					<SingleChampionStats championStatsInfo={championStats.championStatsInfo} event={this.getSingleChampionAbilities.bind(this)} />
				</div>
			);	
		}

		return (
			<SingleChampionStats championStatsInfo={championStats.championStatsInfo} event={this.getSingleChampionAbilities.bind(this)} />
		);		
	}
}