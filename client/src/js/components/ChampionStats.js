import React from 'react';
import { connect } from "react-redux";

import { fetchChampionStats,fetchChamptionStatsDetails } from "../actions/championStatsAction";
import { fetchItemStats } from "../actions/itemStatsAction";

import ImageIcon from './ImageIcon';
import SingleChampionStats from './SingleChampionStats';
import SinglechamptionStatsDetail from './SinglechamptionStatsDetail';
import SingleItemStats from './SingleItemStats';

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

	getItemStats() {
		this.props.dispatch(fetchItemStats());
	}


	getSingleChampionAbilities(event) {

		event.preventDefault();
		const key = [event.target.className];
		const stats = this.props.championStats.championStatsInfo[key].stats;
		stats.level = 1;
		stats.key = key;
		this.props.dispatch(fetchChamptionStatsDetails(stats))
		//console.log("OKKKKK")
	}

	changeOpacity (num,event) {
		//event.preventDefault();
		document.getElementById(event.target.className).style.opacity = num
	}


	render() {
		const {championStats,singleChamptionstats} = this.props;

		if (championStats.fetched == false) {
			this.getChampionStats();
			this.getItemStats();
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
					<SinglechamptionStatsDetail style={singleStyle} 
					champAbility = {championStats.singleChamptionstats} />
					<SingleChampionStats championStatsInfo={championStats.championStatsInfo} 
					event={this.getSingleChampionAbilities.bind(this)}
					hover={this.changeOpacity.bind(this)}
					/>
				</div>
			);	
		}

		return (
			<div>
				<SingleChampionStats 
					championStatsInfo={championStats.championStatsInfo} 
					event={this.getSingleChampionAbilities.bind(this)} 
					hover= {this.changeOpacity.bind(this)}
				/>

				<SingleItemStats
					itemStatsInfo={championStats.itemStatsInfo}
				/>
			</div>
		);		
	}
}